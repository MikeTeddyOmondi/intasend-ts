import { AxiosInstance } from 'axios';
import { MpesaStkPushRequest, MpesaStkPushResponse } from '../types/intasend-types.d'

export function collectionsApi(axiosInstance: AxiosInstance) {
    return {
        mpesaStkPush: async (payload: MpesaStkPushRequest): Promise<PaymentResponse> => {
            try {
                const response = await axiosInstance.post<PaymentResponse>('/payments/card', payload);
                return response.data;
            } catch (error) {
                throw new Error(`Failed to retrieve payment status: ${error.response?.data?.message || error.message}`);
            }
        },
        mpesaStkPushStatus: async (invoiceId: string): Promise<PaymentResponse> => {
            try {
                const response = await axiosInstance.post<PaymentResponse>('/payments/card', invoiceId);
                return response.data;
            } catch (error) {
                throw new Error(`Failed to retrieve payment status: ${error.response?.data?.message || error.message}`);
            }
        },
    };
}
