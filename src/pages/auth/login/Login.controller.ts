import React, { FormEvent, useContext, useState } from "react";
import { UserContext } from "../../../store/context/userContext/UserContext";

export default function useLoginController() {
    const { handleLogin } = useContext(UserContext);
    const [loginCred, setLoginCred] = useState({
        email: "",
        password: "",
    });

    const submitLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(loginCred);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginCred({ ...loginCred, [e.target.name]: e.target.value });
    };

    return { loginCred, handleChange, submitLogin };
}
