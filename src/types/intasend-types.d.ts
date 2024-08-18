export interface IntaSendConfig {
    publishableKey: string;
    secretKey: string;
    live: boolean;  
    baseUrl?: string;
}

export interface MpesaStkPushRequest {
    amount: number;
    phone_number: string;
    api_ref?: string;
    wallet_id?: string;
}

export interface MpesaStkPushResponse {
    id: string;
    invoice: Invoice;
    customer: Customer;
    payment_link: PaymentLink;
    customer_comment: string | null;
    refundable: string;
    created_at: string | null;
    updated_at: string | null;
}

interface PaymentLink {
    id: string;
    title: string;
    is_active: boolean;
    redirect_url: string | null; // Optional website URL to redirect the client after a successful payment
    amount: number; // ≥ 0, Defaults to 0
    usage_limit: number; // ≥ 0, Defaults to 0
    qrcode_file: string | null;
    url: string;
    currency: "KES" | "USD" | "EUR" | "GBP";
    mobile_tarrif: "BUSINESS-PAYS" | "CUSTOMER-PAYS";
    card_tarrif: "BUSINESS-PAYS" | "CUSTOMER-PAYS";
    created_at: string | null; // date-time
    updated_at: string | null; // date-time
    customer_comment: string | null;
    refundable: string;
}

interface Customer {
    customer_id: string;
    phone_number: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    country: string | null;
    zipcode: string | null;
    provider: "M-PESA" | "CARD-PAYMENT" | "BITCOIN" | "BANK-ACH" | "COOP_B2B" | null;
    created_at: string | null; // date-time
    updated_at: string | null; // date-time
}

interface Charges {
    net_amount: string;
    currency: string;
    value: string;
    account: string | null; // Depositing account, email, or phone number
}

interface Payment {
    id: string;
    invoice: Invoice;
    provider: "M-PESA" | "CARD-PAYMENT" | "BITCOIN" | "BANK-ACH" | "COOP_B2B";
    charges: Charges;
    api_ref: string | null; // API tracking reference number
    clearing_status: string;
    mpesa_reference: string;
    host: string | null; // Payment origin host i.e. domain making the payment
    retry_count: number; // -2147483648 to 2147483647
    failed_reason: string | null;
    failed_code: string | null;
    failed_code_link: string;
    created_at: string | null; // date-time
    updated_at: string | null; // date-time
    customer: Customer;
    payment_link: PaymentLink;
}

interface Invoice {
    invoice_id: string;
    state: "PENDING" | "PROCESSING" | "FAILED" | "CANCELED" | "PARTIAL" | "COMPLETE" | "RETRY";
    provider: "M-PESA" | "CARD-PAYMENT" | "BITCOIN" | "BANK-ACH" | "COOP_B2B";
    charges: {
        net_amount: string;
        currency: string;
        value: string;
        account: string | null; // Depositing account, email, or phone number
    };
    api_ref: string | null; // API tracking reference number
    clearing_status: string;
    mpesa_reference: string;
    host: string | null; // Payment origin host i.e. domain making the payment
    retry_count: number; // -2147483648 to 2147483647
    failed_reason: string | null;
    failed_code: string | null;
    failed_code_link: string;
    created_at: string | null; // date-time
    updated_at: string | null; // date-time
}



export interface PaymentResponse {
    id: string;
    status: string;
    amount: number;
    currency: string;
    createdAt: string;
    // Add other response fields
}
