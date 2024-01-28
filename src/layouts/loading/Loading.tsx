import React from "react";
import logo from "../../assets/icons/logo.png";
import s from "./Loading.module.css";

export default function Loading() {
    return (
        <div className={s.loading}>
            <div className={s.loadingBox}>
                <img src={logo} alt="Emis" />
            </div>
        </div>
    );
}
