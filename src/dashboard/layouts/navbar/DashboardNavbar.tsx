import React from "react";
import s from "./DashboardNavbar.module.css";

export default function DashboardNavbar() {
    return (
        <div className={s.LevelNavbar}>
            <div className={s.logoBox}>
                <img src="" alt="Flicks Solution Logo" />
            </div>
            <div className={s.levelBarBox}>
                <span />
            </div>
        </div>
    );
}
