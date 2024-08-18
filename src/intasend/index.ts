import axios, { AxiosInstance } from 'axios';
import { IntaSendConfig, PaymentResponse } from '../types/intasend-types.d';
import { collectionsApi } from './collections';

export class IntaSend {
    private publishableKey: string;
    private secretKey: string;
    private baseUrl: string;
    private axiosInstance: AxiosInstance;

    constructor(config: IntaSendConfig) {
        this.secretKey = config.secretKey;
        this.publishableKey = config.publishableKey;

        // Set base URL based on the 'live' flag
        this.baseUrl = config.live
            ? "https://payments.intasend.com/v1"
            : "https://sandbox.intasend.com/v1";

        // Optionally allow manual override of baseUrl via config
        if (config.baseUrl) {
            this.baseUrl = config.baseUrl;
        }

        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                Authorization: `Bearer ${this.secretKey}`,
                "X-IntaSend-Public-API-Key": `Bearer ${this.publishableKey}`,
                'Content-Type': 'application/json',
            },
        });
    }

    // CollectionsAPI
    public collections() {
        return collectionsApi(this.axiosInstance);
    }

}
