import React, { createContext, useState } from "react";
import axios from "axios";
import {
    BankDetailsPayload,
    BusinessInformationPayload,
    OnboardingContextProps,
    OnboardingContextType,
    PersonalInformationPayload,
} from "./OnboardingContext.type";
import Keys from "../../Keys";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const OnboardingContext = createContext<OnboardingContextType>(
    [] as unknown as OnboardingContextType
);

export const OnboardingProvider = ({ children }: OnboardingContextProps) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCloudinaryImageUpload = async (data: File) => {
        const formData = new FormData();
        formData.append("file", data);
        formData.append("upload_preset", "emis-gallery");
        toast("Uploading...");

        return axios.post(
            "https://api.cloudinary.com/v1_1/ryanfavour4/image/upload",
            formData
        );
    };

    const handleSendPersonalInformation = async (
        payload: PersonalInformationPayload,
        userID: string
    ) => {
        setLoading(true);
        axios
            .post(`${Keys.API_BASE_URL}personal-information`, {
                ...payload,
                referenceID: userID,
            })
            .then((res) => {
                setLoading(false);
                toast.success("Personal Information Submitted! 😊");
                navigate("/onboarding/business-information");
            })
            .catch((err) => {
                setLoading(false);
                toast.error("Something went wrong! ☹");
            });
    };

    const handleSendBusinessInformation = async (
        payload: BusinessInformationPayload,
        userID: string
    ) => {
        setLoading(true);
        axios
            .post(`${Keys.API_BASE_URL}business-information`, {
                ...payload,
                referenceID: userID,
            })
            .then((res) => {
                setLoading(false);
                toast.success("Business Information Submitted! 😊");
                navigate("/onboarding/bank-details");
            })
            .catch((err) => {
                setLoading(false);
                toast.error("Something went wrong! ☹");
            });
    };

    const handleSendBankDetails = async (
        payload: BankDetailsPayload,
        userID: string
    ) => {
        setLoading(true);
        axios
            .post(`${Keys.API_BASE_URL}bank-details`, {
                ...payload,
                referenceID: userID,
            })
            .then((res) => {
                setLoading(false);
                toast.success("Bank Details Submitted! 😊");
                navigate("/onboarding/terms-condition");
            })
            .catch((err) => {
                setLoading(false);
                toast.error("Something went wrong! ☹");
            });
    };

    return (
        <OnboardingContext.Provider
            value={{
                loading,
                handleSendPersonalInformation,
                handleSendBusinessInformation,
                handleSendBankDetails,
                handleCloudinaryImageUpload,
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
};
