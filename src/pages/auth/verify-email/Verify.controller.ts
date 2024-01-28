import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../store/context/userContext/UserContext";

export default function useVerifyController() {
    const { user, handleVerifyEmail } = useContext(UserContext);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const email = params.get("email");
    const id = params.get("id");

    useEffect(() => {
        setUserEmail(email);
    }, [email, location]);

    const submitVerifyEmail = () => {
        if (email && id) handleVerifyEmail(id);
    };

    useEffect(() => {
        if (!email || !user) {
            toast.warning("Invalid User");
            navigate("/");
        }
        if (user?.emailVerified) {
            toast.info("Email already verified");
            navigate("/dashboard/home");
        }

        return () => {};
    }, [email, navigate, user]);

    return { userEmail, navigate, submitVerifyEmail };
}
