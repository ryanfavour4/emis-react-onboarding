import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { UserContext } from "../../../store/context/userContext/UserContext";
import { OnboardingContext } from "../../../store/context/onboardingContext/OnboardingContext";

export default function useBankDetailsController() {
    const { handleSendBankDetails } = useContext(OnboardingContext);
    const { user } = useContext(UserContext);
    const [bankDetails, setBankDetails] = useState({
        bankName: "",
        accountNumber: "",
        bankSortCode: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBankDetails({ ...bankDetails, [e.target.name]: e.target.value });
    };

    const submitBankDetails = (e: FormEvent) => {
        e.preventDefault();
        if (user?.id) handleSendBankDetails(bankDetails, user.id);
    };

    return { bankDetails, handleChange, submitBankDetails };
}
