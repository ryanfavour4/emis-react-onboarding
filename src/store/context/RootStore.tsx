// Create the RootStore
import React, { ReactNode } from "react";
import { UserProvider } from "./userContext/UserContext";
import { OnboardingProvider } from "./onboardingContext/OnboardingContext";

type Props = {
    children: ReactNode;
};

export const RootStore = ({ children }: Props) => {
    return (
        <UserProvider>
            <OnboardingProvider>{children}</OnboardingProvider>
        </UserProvider>
    );
};
