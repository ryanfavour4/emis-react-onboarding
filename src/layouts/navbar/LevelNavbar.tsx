import React from "react";
import s from "./LevelNavbar.module.css";
import logo from "../../assets/icons/logo.png";

export default function LevelNavbar() {
    return (
        <div className={s.LevelNavbar}>
            <div className={s.logoBox}>
                <img src={logo} alt="Flicks Solution" />
            </div>

            <div className={s.levelBarBox}>
                <span />
            </div>
        </div>
    );
}
