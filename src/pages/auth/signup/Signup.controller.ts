import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSignupController() {
    const navigate = useNavigate();
    const userCachedCred = JSON.parse(
        localStorage.getItem("signupCred") || "{}"
    );
    const [signupCred, setSignupCred] = useState({
        email: userCachedCred.email || "",
        password: userCachedCred.password || "",
        firstName: userCachedCred.firstName || "",
        lastName: userCachedCred.lastName || "",
    });

    const submitSignup = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("signupCred", JSON.stringify(signupCred));
        navigate(`/register-type`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupCred({ ...signupCred, [e.target.name]: e.target.value });
    };

    return { signupCred, submitSignup, handleChange };
}
