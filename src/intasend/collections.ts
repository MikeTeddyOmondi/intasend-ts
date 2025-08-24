import { AxiosInstance } from 'axios';
import { MpesaStkPushRequest, MpesaStkPushResponse } from '../types/intasend-types.d'

export function collectionsApi(axiosInstance: AxiosInstance) {
    return {
        mpesaStkPush: async (payload: MpesaStkPushRequest): Promise<MpesaStkPushResponse> => {
            try {
                const response = await axiosInstance.post<MpesaStkPushResponse>('/payment/mpesa-stk-push/', payload);
                return response.data;
            } catch (error) {
                console.error({ mpesaStkPushErr: error })
                throw new Error(`Failed to initiate M-pesa STK Push: ${error.response?.data?.message || error.message}`);
            }
        },
        mpesaStkPushStatus: async (invoiceId: string): Promise<PaymentResponse> => {
            try {
                const response = await axiosInstance.post<PaymentResponse>('/payments/status', invoiceId);
                return response.data;
            } catch (error) {
                console.error({ mpesaStkPushStatusErr: error })
                throw new Error(`Failed to retrieve M-pesa STK Push status: ${error.response?.data?.message || error.message}`);
            }
        },
    };
}
