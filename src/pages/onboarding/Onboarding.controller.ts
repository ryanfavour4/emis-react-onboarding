/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../store/context/userContext/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { isObjectEmpty } from "../../utils/isObjectEmpty";

export default function useOnboardingController() {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const lastPath = location.pathname.split("/").pop();

    const [onBoardingSteps, setOnBoardingSteps] = useState([
        {
            title: "Personal Information",
            path: "/",
            description:
                "Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt id turpis sed nunc vulputate leo sed. Sapienert.",
            active: true,
        },
        {
            title: "Business Information",
            path: "business-information",
            description:
                "Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt id turpis sed nunc vulputate leo sed. Sapienert.",
            active: false,
        },
        {
            title: "Bank Details",
            path: "bank-details",
            description:
                "Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt id turpis sed nunc vulputate leo sed. Sapienert.",
            active: false,
        },
        {
            title: "Terms and Condition",
            path: "terms-condition",
            description:
                "Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt id turpis sed nunc vulputate leo sed. Sapienert.",
            active: false,
        },
    ]);
    const cachedUser = JSON.parse(sessionStorage.getItem("user") || "{}");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && isObjectEmpty(cachedUser)) {
            toast.warning("Invalid User, Not Authorized");
            navigate("/");
        }
        return () => {};
    }, [cachedUser, navigate, user]);

    useEffect(() => {
        const indexToChange = onBoardingSteps.findIndex(
            (step) => step.path === lastPath
        );

        if (indexToChange > 0) {
            const steps = [...onBoardingSteps];
            steps[indexToChange].active = true;
            setOnBoardingSteps(steps);
        }
    }, [lastPath, location]);

    return { onBoardingSteps };
}
