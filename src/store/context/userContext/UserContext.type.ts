import { ReactNode } from "react";

export type UserContextProps = {
    children: ReactNode;
};

export type UserContextType = {
    loading: boolean;
    user: allUsers | null;
    allUsers: allUsers[];
    handleSignup: (payload: signUpPayload) => void;
    handleLogin: (payload: loginPayload) => void;
    handleGetAllUsers: () => void;
    handleVerifyEmail: (id: string) => void;
    handleLogout: () => void;
};

export type loginPayload = {
    email: string;
    password: string;
};

export type signUpPayload = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: string;
};

export type allUsers = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    emailVerified?: boolean;
    userType: string;
};
