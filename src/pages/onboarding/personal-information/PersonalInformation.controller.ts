import { FormEvent, useContext, useState } from "react";
import { OnboardingContext } from "../../../store/context/onboardingContext/OnboardingContext";
import { UserContext } from "../../../store/context/userContext/UserContext";
import { toast } from "react-toastify";

export default function usePersonalInformationController() {
    const { handleSendPersonalInformation, handleCloudinaryImageUpload } =
        useContext(OnboardingContext);
    const { user } = useContext(UserContext);

    const proofsOfAddressTypes = [
        "Utility Bills",
        "Council Tax Bill",
        "Mortgage Statement",
        "Bank Statement",
        "Government Letters",
    ];
    const identificationVerificationTypes = [
        "National Identity Card",
        "Diplomatic ID",
        "Driver's License",
        "Birth Certificate",
    ];
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "",
        bvn: "",
        proofOfAddressType: "",
        proofOfAddressFile: "",
        identificationVerificationType: "",
        identificationVerificationFile: "",
        identificationNumber: "",
        passport: "",
    });

    const changePersonalInformation = async (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        if (
            e.target instanceof HTMLInputElement &&
            e.target.type === "file" &&
            e.target.files
        ) {
            handleCloudinaryImageUpload(e.target.files[0]).then((res) => {
                setPersonalInfo({
                    ...personalInfo,
                    [e.target.name]: res.data.secure_url,
                });
                toast("Done ✅");
            });
        } else {
            setPersonalInfo({
                ...personalInfo,
                [e.target.name]: e.target.value,
            });
        }
    };

    const submitPersonalInformation = (e: FormEvent) => {
        e.preventDefault();
        if (user?.id) handleSendPersonalInformation(personalInfo, user.id);
    };

    return {
        personalInfo,
        proofsOfAddressTypes,
        identificationVerificationTypes,
        changePersonalInformation,
        submitPersonalInformation,
    };
}
