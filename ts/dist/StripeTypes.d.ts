export interface Session {
    amount_total?: number;
    cancel_url?: string;
    created?: number;
    currency?: string;
    customer?: string;
    id?: string;
    mode?: string;
    object?: string;
    payment_status?: string;
    status?: string;
    success_url?: string;
}
export interface SessionLoadMatch {
    id: string;
}
export interface SessionListMatch {
    customer?: string;
    limit?: number;
}
export interface SessionCreateData {
    amount_total?: number;
    cancel_url?: string;
    created?: number;
    currency?: string;
    customer?: string;
    id?: string;
    mode?: string;
    object?: string;
    payment_status?: string;
    status?: string;
    success_url?: string;
}
