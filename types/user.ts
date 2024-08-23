export interface Address {
    line1: string;
    line2: string;
    state: string;
    city: string;
    pin: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    linkedinURL: string;
    gender: string;
    address: Address;
}

export interface AddressErrors {
    line1?: string;
    line2?: string;
    state?: string;
    city?: string;
    pin?: string;
}

export interface UserErrors {
    name?: string;
    email?: string;
    linkedinURL?: string;
    gender?: string;
    address?: AddressErrors;
}
