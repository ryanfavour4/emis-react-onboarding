import React from "react";
import s from "./Login.module.css";
import Button from "../../../components/buttons/Button";
import Input from "../../../components/inputs/Input";
import LevelNavbar from "../../../layouts/navbar/LevelNavbar";
import loginIllustrator from "../../../assets/icons/login-illustration.png";
import useLoginController from "./Login.controller";
import { Link } from "react-router-dom";

export default function Login() {
    const { handleChange, submitLogin } = useLoginController();

    return (
        <>
            <LevelNavbar />
            <div className={s.loginBox}>
                <div className={s.block1}>
                    <h2>Login to your account</h2>
                    <div className={s.loginDescDiv}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nibh vitae
                            aliquet nuncmauris. Quam suspendisse lacus at eget.{" "}
                        </p>
                    </div>
                    <form onSubmit={submitLogin} action="">
                        <Input
                            onChange={handleChange}
                            label="Email address"
                            type="email"
                            name="email"
                            placeholder="Email address"
                        />
                        <br />
                        <Input
                            onChange={handleChange}
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />

                        <br />
                        <Button>Next</Button>

                        <p>
                            Don't have an account?{" "}
                            <Link to={"/get-started"}>Sign Up</Link>
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
                <div className={s.illustratorBlock}>
                    <img src={loginIllustrator} alt="login" />
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
