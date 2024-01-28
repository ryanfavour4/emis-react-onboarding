import React from "react";
import s from "./Signup.module.css";
import Button from "../../../components/buttons/Button";
import Input from "../../../components/inputs/Input";
import LevelNavbar from "../../../layouts/navbar/LevelNavbar";
import wallpaper from "../../../assets/images/get-started.jpg";
import useSignupController from "./Signup.controller";
import { Link } from "react-router-dom";

export default function Signup() {
    const { signupCred, handleChange, submitSignup } = useSignupController();
    return (
        <>
            <LevelNavbar />
            <div className={s.loginBox}>
                <div className={s.block1}>
                    <h2>Get Started</h2>
                    <div className={s.loginDescDiv}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nibh vitae
                            aliquet nuncmauris. Quam suspendisse lacus at eget.{" "}
                        </p>
                    </div>
                    <form onSubmit={submitSignup} action="">
                        <Input
                            label="First name"
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={signupCred.firstName}
                            onChange={handleChange}
                        />
                        <br />
                        <Input
                            label="Last name"
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={signupCred.lastName}
                            onChange={handleChange}
                        />
                        <br />
                        <Input
                            label="Email address"
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={signupCred.email}
                            onChange={handleChange}
                        />
                        <br />
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signupCred.password}
                            onChange={handleChange}
                        />
                        <br />

                        <Button>Next</Button>

                        <p>
                            Already have an account? <Link to={"/"}>Login</Link>
                        </p>
                    </form>

                    <div className={s.mobileBlockText}>
                        <h3>
                            FlicksSolutions Ultimate Solution For Problems In
                            Organizations
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Aliquet id
                            tincidunt id turpis sed nunc vulputate leo sed.
                            Sapien massa hac ut erat nec quam tincidunt interdum
                            mauris. Id cras suscipit sagittis pellentesque.
                            Justo nam vestibulum egestas nulla vitae integer.
                            Imperdiet nibh praesent erat at tortor ultrices
                        </p>
                    </div>
                </div>
                <div className={s.illustratorBlock2}>
                    <img src={wallpaper} alt="login" />
                    <div className={s.illustratorBlockText}>
                        <h3>
                            FlicksSolutions Ultimate Solution For Problems In
                            Organizations
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Aliquet id
                            tincidunt id turpis sed nunc vulputate leo sed.
                            Sapien massa hac ut erat nec quam tincidunt interdum
                            mauris. Id cras suscipit sagittis pellentesque.
                            Justo nam vestibulum egestas nulla vitae integer.
                            Imperdiet nibh praesent erat at tortor ultrices
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
