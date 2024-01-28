import React from "react";
import s from "./PersonalInformation.module.css";
import Input from "../../../components/inputs/Input";
import Select from "../../../components/selects/Select";
import usePersonalInformationController from "./PersonalInformation.controller";
import Button from "../../../components/buttons/Button";

export default function PersonalInformation() {
    const {
        personalInfo,
        proofsOfAddressTypes,
        identificationVerificationTypes,
        changePersonalInformation,
        submitPersonalInformation,
    } = usePersonalInformationController();
    return (
        <div className={s.PersonalInformation}>
            <div className={s.PersonalInformationWrapper}>
                <div className={s.PersonalInformationTopTitle}>
                    <h2>Personal Information</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur. Nibh vitae
                        aliquet nuncmauris. Quam suspendisse lacus at eget.{" "}
                    </p>
                </div>

                <form action="">
                    <div className={s.formWrapperDiv}>
                        <Input
                            label="Full Name"
                            name="fullName"
                            placeholder="Chukwuka Ryan Favour"
                            type="text"
                            onChange={changePersonalInformation}
                            value={personalInfo.fullName}
                        />
                        <Input
                            label="BVN"
                            name="bvn"
                            placeholder="BVN"
                            type="number"
                            min={0}
                            onChange={changePersonalInformation}
                            value={personalInfo.bvn}
                        />
                        <Input
                            label="Identification Number"
                            name="identificationNumber"
                            placeholder="Identification Number"
                            type="number"
                            min={0}
                            onChange={changePersonalInformation}
                            value={personalInfo.identificationNumber}
                        />

                        <div>
                            <label>Proof of Address</label>
                            <div className={s.selectAndUpload}>
                                <Select
                                    name="proofOfAddressType"
                                    className="rounded-r-0"
                                    onChange={changePersonalInformation}
                                    value={personalInfo.proofOfAddressType}
                                >
                                    <option hidden>Select document</option>
                                    {proofsOfAddressTypes.map((val, idx) => (
                                        <option key={idx} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </Select>
                                <Input
                                    name="proofOfAddressFile"
                                    type="file"
                                    accept="image/*"
                                    fileClass="rounded-l-0"
                                    onChange={changePersonalInformation}
                                    tag={
                                        personalInfo.proofOfAddressFile &&
                                        `${personalInfo.proofOfAddressType} Uploaded!`
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <label>Identification Verification</label>
                            <div className={s.selectAndUpload}>
                                <Select
                                    name="identificationVerificationType"
                                    className="rounded-r-0"
                                    onChange={changePersonalInformation}
                                    value={
                                        personalInfo.identificationVerificationType
                                    }
                                >
                                    <option hidden>Select document</option>
                                    {identificationVerificationTypes.map(
                                        (val, idx) => (
                                            <option key={idx} value={val}>
                                                {val}
                                            </option>
                                        )
                                    )}
                                </Select>
                                <Input
                                    name="identificationVerificationFile"
                                    type="file"
                                    accept="image/*"
                                    fileClass="rounded-l-0"
                                    onChange={changePersonalInformation}
                                    tag={
                                        personalInfo.identificationVerificationFile &&
                                        `${personalInfo.identificationVerificationType} Uploaded!`
                                    }
                                />
                            </div>
                        </div>

                        <Input
                            label="Passport"
                            name="passport"
                            type="file"
                            accept="image/*"
                            onChange={changePersonalInformation}
                            tag={personalInfo.passport && "Passport Uploaded"}
                        />
                    </div>

                    <Button
                        onClick={submitPersonalInformation}
                        className="w-full"
                    >
                        Continue
                    </Button>
                </form>
            </div>
        </div>
    );
}
