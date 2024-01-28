import React from "react";
import s from "./BankDetails.module.css";
import Input from "../../../components/inputs/Input";
import Button from "../../../components/buttons/Button";
import useBankDetailsController from "./BankDetails.controller";

export default function BankDetails() {
    const { bankDetails, handleChange, submitBankDetails } =
        useBankDetailsController();
    return (
        <div className={s.BankDetails}>
            <div className={s.BankDetailsWrapper}>
                <div className={s.BankDetailsTopTitle}>
                    <h2>Bank Details</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur. Nibh vitae
                        aliquet nuncmauris. Quam suspendisse lacus at eget.{" "}
                    </p>
                </div>

                <form onSubmit={submitBankDetails} action="">
                    <div className={s.formWrapperDiv}>
                        <Input
                            label="Bank name"
                            name="bankName"
                            placeholder="Bank name"
                            type="text"
                            value={bankDetails.bankName}
                            onChange={handleChange}
                        />

                        <Input
                            label="Account number"
                            name="accountNumber"
                            placeholder="Account number"
                            type="number"
                            value={bankDetails.accountNumber}
                            onChange={handleChange}
                        />

                        <Input
                            label="Bank sort code"
                            name="bankSortCode"
                            placeholder="Bank sort code"
                            type="text"
                            value={bankDetails.bankSortCode}
                            onChange={handleChange}
                        />
                    </div>

                    <Button className="w-full">Continue</Button>
                </form>
            </div>
        </div>
    );
}
