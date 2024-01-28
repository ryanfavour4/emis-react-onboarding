import React from "react";
import s from "./Verify.module.css";
import Button from "../../../components/buttons/Button";
import LevelNavbar from "../../../layouts/navbar/LevelNavbar";
import emailIcon from "../../../assets/icons/email-verify.png";
import useVerifyController from "./Verify.controller";

export default function Verify() {
    const { userEmail, navigate, submitVerifyEmail } = useVerifyController();

    return (
        <>
            <LevelNavbar />
            <div className="wrapper">
                <div className={s.verifyBox}>
                    <img src={emailIcon} alt="" />

                    <h3>Verify your Email address</h3>

                    <p>
                        You’ve entered <b>{userEmail}</b> as the email address
                        for your account. Please verify your account by clicking
                        the verify email address button or skip to verify later
                    </p>

                    <div className={s.buttonGroup}>
                        <Button onClick={submitVerifyEmail}>
                            Verify Email Address
                        </Button>
                        <Button
                            onClick={() => navigate("/dashboard/home")}
                            variants="complimentary"
                        >
                            Skip for now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
