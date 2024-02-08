import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./navbar/DashboardNavbar";
import s from "./Index.module.css";
import useDashboardLayoutController from "./Index.controller";
import Topbar from "./topbar/Topbar";

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
                ${mobileAsideBool && !isMobileAsideOpen && s.openAsideMobile} 
                `}
                onClick={toggleMobileAside}
            >
                <nav onClick={(e) => e.stopPropagation()}>
                    <DashboardNavbar />
                </nav>
            </aside>
            <div className={s.rightMainCol}>
                {/* //???? ========================= TOP BAR ======================== */}
                <Topbar
                    toggleMobileAside={toggleMobileAside}
                    toggleDesktopAside={toggleDesktopAside}
                />
                <Outlet />
            </div>
        </div>
    );
}
