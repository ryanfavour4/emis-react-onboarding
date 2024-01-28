import React from "react";
import s from "./RegisterType.module.css";
import LevelNavbar from "../../../layouts/navbar/LevelNavbar";
import Button from "../../../components/buttons/Button";
import RoleSelectBox from "../../../components/roleSelectBox/RoleSelectBox";
import useRegisterType from "./RegisterType.controller";
import illustration from "../../../assets/icons/onboarding-illustrator.png";

export default function RegisterType() {
    const {
        signupCred,
        changeUserType,
        selectedUserType,
        userTypesList,
        submitFinalForm,
    } = useRegisterType();

    return (
        <>
            <LevelNavbar />
            <div className={s.registerType}>
                <div className="wrapper">
                    <div className={s.block1}>
                        <h2>Welcome {signupCred?.firstName},</h2>
                        <p>What type of user are you?</p>

                        <div className={s.optionsLists}>
                            {userTypesList.map((role, index) => {
                                return (
                                    <RoleSelectBox
                                        title={role.title}
                                        description={role.description}
                                        name="register"
                                        value={role.value}
                                        selectedValue={selectedUserType}
                                        onChange={(e) => changeUserType(e)}
                                    />
                                );
                            })}
                        </div>
                        <Button onClick={submitFinalForm}>Next</Button>
                    </div>
                    <div className={s.illustratorBlock}>
                        <img src={illustration} alt="illustration" />
                    </div>
                </div>
            </div>
        </>
    );
}
