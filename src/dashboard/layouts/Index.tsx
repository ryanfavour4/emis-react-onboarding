import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./navbar/DashboardNavbar";
import s from "./Index.module.css";
import useDashboardLayoutController from "./Index.controller";
import Button from "../../components/buttons/Button";

export default function DashboardLayout() {
    const {
        mobileAsideBool,
        isMobileAsideOpen,
        toggleMobileAside,
        desktopAsideBool,
        isDesktopAsideOpen,
        toggleDesktopAside,
    } = useDashboardLayoutController();

    return (
        <div className={s.dashboardLayout}>
            <aside
                // MOBILE AND DESKTOP STYLINGS AND FEATURE VARY FOR BOTH
                className={`${s.leftNavCol} 
                ${
                    desktopAsideBool &&
                    !isDesktopAsideOpen &&
                    s.closeAsideDesktop
                }
                ${mobileAsideBool && isMobileAsideOpen && s.openAsideMobile} 
                `}
                onClick={toggleMobileAside}
            >
                <nav>
                    <DashboardNavbar />
                </nav>
            </aside>
            <div className={s.rightMainCol}>
                <div className="">
                    <button onClick={toggleMobileAside}>
                        OPEN MOBILE SIDE BAR
                    </button>
                    <Button onClick={toggleMobileAside}>
                        OPEN MOBILE SIDE BAR
                    </Button>
                    <br />
                    <button onClick={toggleDesktopAside}>
                        TOGGLE DESKTOP SIDE BAR
                    </button>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
