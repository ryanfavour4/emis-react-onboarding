import { AxiosResponse } from "axios";
import { ReactNode } from "react";

export type OnboardingContextProps = {
    children: ReactNode;
};

export type OnboardingContextType = {
    loading: boolean;
    handleSendPersonalInformation: (
        payload: PersonalInformationPayload,
        userID: string
    ) => void;
    handleSendBusinessInformation: (
        payload: BusinessInformationPayload,
        userID: string
    ) => void;
    handleSendBankDetails: (
        payload: BankDetailsPayload,
        userID: string
    ) => void;
    handleCloudinaryImageUpload: (
        data: File
    ) => Promise<AxiosResponse<any, any>>;
};

export type PersonalInformationPayload = {
    fullName: string;
    bvn: string;
    proofOfAddressType: string;
    proofOfAddressFile: string;
    identificationVerificationType: string;
    identificationVerificationFile: string;
    identificationNumber: string;
    passport: string;
};

export interface BusinessInformationPayload {
    businessName: string;
    businessAddress: string;
    businessEmail: string;
    country: string;
    stateCity: string;
    phoneNumber: string;
    logo: string;
    websiteUrl: string;
    socialMediaInfo: SocialMediaInfo[];
    requiredDocuments: RequiredDocument[];
}

export interface RequiredDocument {
    requiredDocumentType: string;
    requiredDocumentFile: string;
}

export interface SocialMediaInfo {
    socialMediaName: string;
    link: string;
}

export interface BankDetailsPayload {
    bankName: string;
    accountNumber: string;
    bankSortCode: string;
}
