import React from "react";
import s from "./Onboarding.module.css";
import { Link, Route, Routes } from "react-router-dom";
import mailIcon from "../../assets/svg/circum_mail.svg";
import logo from "../../assets/icons/logo.png";
import checkGrey from "../../assets/svg/onboarding-checkbox-grey.svg";
import checkBlue from "../../assets/svg/onboarding-checkbox-blue.svg";
import Button from "../../components/buttons/Button";
import PersonalInformation from "./personal-information/PersonalInformation";
import useOnboardingController from "./Onboarding.controller";
import BusinessInformation from "./business-information/BusinessInformation";
import BankDetails from "./bank-details/BankDetails";
import TermConditions from "./terms-conditions/TermConditions";

export default function Onboarding() {
    const { onBoardingSteps } = useOnboardingController();
    return (
        <div className={s.onBoarding}>
            <div className={s.onBoardingLeftCol}>
                {/* ------ START BLOCK FOR MOBILE NAV ------- */}
                <div className={s.mobileProgressTopArea}>
                    <Link to={"/"} className={s.logoArea}>
                        <img src={logo} alt="" />
                    </Link>
                    {/* <div className={s.mobileCheckedPages}>
                        <ul>
                            <li
                                className={`${s.mobileCheckPageList} ${s.mobileInactiveCheckPageList}`}
                            >
                                <p>Personal Information</p>
                            </li>
                            <li
                                className={`${s.mobileCheckPageList} ${s.mobileInactiveCheckPageList}`}
                            >
                                <p>Business Information</p>
                            </li>
                            <li
                                className={`${s.mobileCheckPageList} ${s.mobileInactiveCheckPageList}`}
                            >
                                <p>Personal Information</p>
                            </li>
                        </ul>
                    </div> */}
                </div>
                {/* ------ END BLOCK FOR MOBILE NAV ------- */}
                <div className={s.topArea}>
                    <Link to="/" className={s.logoArea}>
                        <img src={logo} alt="" />
                    </Link>

                    <div className={s.checkedPages}>
                        <ul>
                            {onBoardingSteps.map((val, idx) => (
                                <li
                                    key={idx}
                                    className={`${s.checkPageList} ${
                                        !val.active && s.inactiveCheckPageList
                                    }`}
                                >
                                    <img
                                        src={val.active ? checkBlue : checkGrey}
                                        alt=""
                                    />
                                    <div className="">
                                        <h3>{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={s.bottomArea}>
                    <p>©2023 Flicks Solutions</p>
                    <a href="mailto:hello@flickssolutions.ng">
                        <img src={mailIcon} alt="hello@flickssolutions.ng" />
                        <p>hello@flickssolutions.ng</p>
                    </a>
                </div>
            </div>
            <div className={s.onBoardingRightCol}>
                <div className={s.skipHeader}>
                    <Button disabled>Skip</Button>
                </div>
                <div className={s.onBoardingRightColScroller}>
                    <Routes>
                        <Route path="/" element={<PersonalInformation />} />
                        <Route
                            path="/business-information"
                            element={<BusinessInformation />}
                        />
                        <Route path="/bank-details" element={<BankDetails />} />
                        <Route
                            path="/terms-condition"
                            element={<TermConditions />}
                        />
                    </Routes>
                </div>
                <div className={s.bottomArea}>
                    <p>©2023 Flicks Solutions</p>
                    <a href="mailto:hello@flickssolutions.ng">
                        <img src={mailIcon} alt="hello@flickssolutions.ng" />
                        <p>hello@flickssolutions.ng</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
