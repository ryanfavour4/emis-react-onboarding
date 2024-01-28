import { ChangeEvent, useContext, useState } from "react";
import { signUpPayload } from "../../../store/context/userContext/UserContext.type";
import { UserContext } from "../../../store/context/userContext/UserContext";

export default function useRegisterType() {
    const { handleSignup } = useContext(UserContext);
    const [selectedUserType, setSelectedUserType] = useState("");
    const signupCred = JSON.parse(
        localStorage.getItem("signupCred") || "{}"
    ) as signUpPayload;
    const changeUserType = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedUserType(e.target.value);
    };

    const [userTypesList] = useState([
        {
            title: "Channel Partner",
            description: "I’m a channel partner",
            value: "channel partner",
        },
        {
            title: "Independent Marketer",
            description: "I’m an independent marketer",
            value: "independent marketer",
        },
        {
            title: "Organization ",
            description: "I’m an organization ",
            value: "organization",
        },
        {
            title: "Government",
            description: "I’m a goverment",
            value: "government",
        },
    ]);

    const submitFinalForm = () => {
        handleSignup({ ...signupCred, userType: selectedUserType });
    };

    return {
        signupCred,
        selectedUserType,
        changeUserType,
        userTypesList,
        submitFinalForm,
    };
}
