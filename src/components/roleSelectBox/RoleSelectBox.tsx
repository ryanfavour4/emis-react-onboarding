import React, { ChangeEvent } from "react";
import s from "./RoleSelectBox.module.css";
import roleHead from "../../assets/icons/role-type-user.png";

export default function RoleSelectBox({
    title,
    description,
    value,
    name,
    onChange,
    selectedValue,
}: RoleSelectBoxProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) return onChange(e);
    };

    return (
        <>
            <label
                htmlFor={value}
                className={`${s.customRadio} ${
                    selectedValue === value && s.active
                }`}
            >
                <div className={s.titleImage}>
                    <img src={roleHead} alt={name} />

                    <div className="">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>

                <div className={s.checkBoxDiv}>
                    <span></span>
                </div>
            </label>

            <input
                type="radio"
                name={name}
                value={value}
                onChange={(e) => handleChange(e)}
                checked={selectedValue === value}
                hidden
                id={value}
            />
        </>
    );
}

// ?? ==== TYPES ==== ??//
type RoleSelectBoxProps = {
    title: string;
    description: string;
    value: string;
    name: string;
    selectedValue: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
};
