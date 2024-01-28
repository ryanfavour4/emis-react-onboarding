import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import {
    UserContextProps,
    UserContextType,
    allUsers,
    loginPayload,
    signUpPayload,
} from "./UserContext.type";
import Keys from "../../Keys";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { isObjectEmpty } from "../../../utils/isObjectEmpty";

export const UserContext = createContext<UserContextType>(
    [] as unknown as UserContextType
);

export const UserProvider = ({ children }: UserContextProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<allUsers | null>(null);
    const [allUsers, setAllUsers] = useState<allUsers[]>([]);
    const navigate = useNavigate();

    const handleSignup = async (payload: signUpPayload) => {
        if (userExists(payload, allUsers)) {
            toast.error("User Already Exists");
            navigate(`/get-started`);
        } else {
            axios
                .post(`${Keys.API_BASE_URL}users`, {
                    ...payload,
                    emailVerified: false,
                })
                .then((res) => {
                    localStorage.removeItem("signupCred");
                    toast.success("Account Created, please verify your email");
                    setUser(res.data);
                    navigate(
                        `/verify-email?email=${res.data.email}&id=${res.data.id}`
                    );
                    sessionStorage.setItem("user", JSON.stringify(res.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleLogin = async (payload: loginPayload) => {
        setLoading(true);
        axios
            .get(
                `${Keys.API_BASE_URL}users?email=${payload.email}&password=${payload.password}`
            )
            .then((res) => {
                setLoading(false);
                if (res.data.length < 1)
                    return toast.error("User Does Not Exist");
                else {
                    toast.success("Welcome Back " + res.data[0].firstName);
                    setUser(res.data[0]);
                    sessionStorage.setItem("user", JSON.stringify(res.data[0]));
                    navigate(`/dashboard/home`);
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong :(");
                setLoading(false);
                console.log(err);
            });
    };

    const handleGetAllUsers = async () => {
        setLoading(true);
        axios
            .get(`${Keys.API_BASE_URL}users`)
            .then((res) => {
                setLoading(false);
                setAllUsers(res.data);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    const handleVerifyEmail = async (id: string) => {
        setLoading(true);
        axios
            .put(`${Keys.API_BASE_URL}users/${id}`, {
                ...user,
                emailVerified: true,
            })
            .then((res) => {
                setLoading(false);
                sessionStorage.setItem("user", JSON.stringify(res.data));
                navigate("/onboarding");
                toast.success("Email Verified");
            })
            .catch((err) => {
                toast.error("Something Went Wrong :(");
                setLoading(false);
                console.log(err);
            });
    };

    const handleLogout = async () => {
        setLoading(true);
        sessionStorage.clear();
        navigate("/");
        setLoading(false);
    };

    //?? ========================== EXTRA IN-HOUSE FUNCTIONS =========================== ??//
    //?? ========================== EXTRA IN-HOUSE FUNCTIONS =========================== ??//
    function userExists(payload: signUpPayload, users: allUsers[]) {
        return users.some((user) => user.email === payload.email);
    }

    useEffect(() => {
        //* TRY TO PERSIST THE USER LOGGED IN FROM LOCAL STORAGE INCASE USER RELOADS
        if (sessionStorage.getItem("user") && isObjectEmpty(user)) {
            setUser(JSON.parse(sessionStorage.getItem("user") || "{}"));
        }
        handleGetAllUsers();
        return;
    }, [user]);

    return (
        <UserContext.Provider
            value={{
                loading,
                user,
                allUsers,
                handleSignup,
                handleLogin,
                handleGetAllUsers,
                handleVerifyEmail,
                handleLogout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
