import React, { ChangeEvent, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import countries from "../../store/Countries.json";
import s from "./Select.module.css";
import "react-phone-number-input/style.css";

type Props = {
    name?: string;
    className?: string;
    value: string;
    onChange: (e: ChangeEvent<ICountrySelectType>) => void;
};

export default function CountrySelect({
    name,
    value,
    onChange,
    className,
}: Props) {
    const selectedCountry = countries.find((country) => country.name === value);
    const [select, setSelect] = useState(selectedCountry?.code || "");
    const CountryCodes = countries.map((codes) => codes.code);

    const onSelect = (code: string) => {
        setSelect(code);
        const selectedCountry = countries.find(
            (country) => country.code === code
        );
        onChange({
            target: { name, alt: code, value: selectedCountry?.name },
        } as ChangeEvent<ICountrySelectType>);
    };

    return (
        <ReactFlagsSelect
            className={`${s.countrySelect} ${className}`}
            selected={select}
            onSelect={onSelect}
            placeholder={"Select a country"}
            searchable
            searchPlaceholder={"Search Your Country"}
            countries={CountryCodes}
            showSelectedLabel
            /*
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
        />
    );
}

export interface ICountrySelectType {
    target: ICountrySelectType;
}

export interface ICountrySelectType {
    name: string;
    alt: string;
    value: string;
}
