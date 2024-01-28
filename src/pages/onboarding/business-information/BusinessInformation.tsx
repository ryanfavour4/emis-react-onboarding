import React, { ChangeEvent } from "react";
import Button from "../../../components/buttons/Button";
import Input from "../../../components/inputs/Input";
import Select from "../../../components/selects/Select";
import s from "./BusinessInformation.module.css";
import CountrySelect from "../../../components/selects/CountrySelect";
import PhoneInput from "react-phone-number-input";
import useBusinessInformationController from "./BusinessInformation.controller";
import ReactHoldButton from "react-longpressable";

export default function BusinessInformation() {
    const {
        businessInformation,
        changeBusinessInfo,
        documentsList,
        requiredDocuments,
        documentTypeChange,
        documentFileChange,
        addDocument,
        deleteDocument,
        socialMediaList,
        socialMediaInfo,
        socialMediaNameChange,
        socialMediaLinkChange,
        addSocialMedia,
        deleteSocialMedia,
        submitBusinessInformation,
    } = useBusinessInformationController();

    return (
        <div className={s.BusinessInformation}>
            <div className={s.BusinessInformationWrapper}>
                <div className={s.BusinessInformationTopTitle}>
                    <h2>Business Information</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur. Nibh vitae
                        aliquet nuncmauris. Quam suspendisse lacus at eget.{" "}
                    </p>
                </div>

                <form action="" onSubmit={submitBusinessInformation}>
                    <div className={s.formWrapperDiv}>
                        <Input
                            label="Business Name"
                            name="businessName"
                            placeholder="e.g Eagle Flyer"
                            type="text"
                            onChange={changeBusinessInfo}
                            value={businessInformation.businessName}
                        />

                        <Input
                            label="Business Address"
                            name="businessAddress"
                            placeholder="121 st Eagle Flyer East Rd."
                            type="text"
                            onChange={changeBusinessInfo}
                            value={businessInformation.businessAddress}
                        />

                        <Input
                            label="Business Email Address"
                            name="businessEmail"
                            placeholder="eagleflyer@gmail.com"
                            type="email"
                            onChange={changeBusinessInfo}
                            value={businessInformation.businessEmail}
                        />

                        <div className="">
                            <label htmlFor="country">Country</label>
                            <CountrySelect
                                name="country"
                                className={s.countrySelect}
                                onChange={changeBusinessInfo}
                                value={businessInformation.country}
                            />
                        </div>

                        <Input
                            label="State, City"
                            name="stateCity"
                            placeholder="Lagos, Oshodi/isolo"
                            type="text"
                            onChange={changeBusinessInfo}
                            value={businessInformation.stateCity}
                        />

                        <div className="">
                            <label htmlFor="firstName">Phone Number</label>
                            <PhoneInput
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="NG"
                                value={businessInformation.phoneNumber}
                                onChange={(e: string) =>
                                    changeBusinessInfo(
                                        null as unknown as ChangeEvent<any>,
                                        "phoneNumber",
                                        e
                                    )
                                }
                                className={s.phoneNumberInput}
                                id="phoneNumber"
                            />
                        </div>

                        <Input
                            label="Logo"
                            name="logo"
                            type="file"
                            accept="image/*"
                            onChange={changeBusinessInfo}
                            tag={businessInformation.logo}
                        />

                        <Input
                            label="Website URL"
                            name="websiteUrl"
                            placeholder="Enter website URL"
                            type="url"
                            onChange={changeBusinessInfo}
                            value={businessInformation.websiteUrl}
                        />

                        <div>
                            <h4 className="d-flex items-center justify-between">
                                <p>Required Documents</p>
                                <Button
                                    type="button"
                                    onClick={addDocument}
                                    size="sm"
                                >
                                    Add new
                                </Button>
                            </h4>
                            {requiredDocuments.map((reqDoc, idx) => (
                                <ReactHoldButton
                                    onLongPress={() => deleteDocument(idx)}
                                    onShortPress={() => null}
                                    longPressTime={500}
                                    key={idx}
                                >
                                    <div className={s.selectAndUpload}>
                                        <Select
                                            name="requiredDocumentType"
                                            className="rounded-r-0"
                                            onChange={(e) =>
                                                documentTypeChange(
                                                    idx,
                                                    e.target.value
                                                )
                                            }
                                            value={reqDoc.requiredDocumentType}
                                        >
                                            <option hidden>
                                                Select document
                                            </option>
                                            {documentsList.map((doc, i) => (
                                                <option key={i} value={doc}>
                                                    {doc}
                                                </option>
                                            ))}
                                        </Select>
                                        <Input
                                            name="requiredDocumentFile"
                                            type="file"
                                            accept="image/*"
                                            fileClass="rounded-l-0"
                                            tag={reqDoc.requiredDocumentFile}
                                            onChange={(e) =>
                                                e.target.files &&
                                                documentFileChange(
                                                    idx,
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                    </div>
                                </ReactHoldButton>
                            ))}
                        </div>

                        <div>
                            <h4 className="d-flex items-center justify-between">
                                <p>Social Media Handles</p>
                                <Button
                                    type="button"
                                    onClick={addSocialMedia}
                                    size="sm"
                                >
                                    Add new
                                </Button>
                            </h4>
                            {socialMediaInfo.map((social, idx) => (
                                <ReactHoldButton
                                    onLongPress={() => deleteSocialMedia(idx)}
                                    onShortPress={() => null}
                                    longPressTime={500}
                                    key={idx}
                                >
                                    <div
                                        className={`${s.selectAndUpload} border-1`}
                                    >
                                        <Select
                                            name="socialMediaName"
                                            className="rounded-r-0 border-0"
                                            onChange={(e) =>
                                                socialMediaNameChange(
                                                    idx,
                                                    e.target.value
                                                )
                                            }
                                            value={social.socialMediaName}
                                        >
                                            <option hidden>
                                                Choose Social
                                            </option>
                                            {socialMediaList.map((val, i) => (
                                                <option key={i} value={val}>
                                                    {val}
                                                </option>
                                            ))}
                                        </Select>
                                        <Input
                                            name="link"
                                            type="url"
                                            className="rounded-l-0"
                                            onChange={(e) =>
                                                socialMediaLinkChange(
                                                    idx,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </ReactHoldButton>
                            ))}
                        </div>
                    </div>

                    <Button className="w-full">Continue</Button>
                </form>
            </div>
        </div>
    );
}
