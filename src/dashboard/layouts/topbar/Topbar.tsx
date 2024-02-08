/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoIosMenu } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBox } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import s from "./Topbar.module.css";
import dp from "../../../assets/images/handsome-adult-male-posing.jpg";

type Props = {
    toggleMobileAside: (_e: any, value?: boolean | undefined) => void;
    toggleDesktopAside: (_e: any, value?: boolean | undefined) => void;
};

export default function Topbar({
    toggleDesktopAside,
    toggleMobileAside,
}: Props) {
    return (
        <div className={s.topBar}>
            <div className={s.topBarWrapper}>
                <div className={s.leftTopBar}>
                    <div className={s.desktopMenuBars}>
                        <a onClick={toggleDesktopAside} href="#">
                            <IoIosMenu />
                        </a>
                        <div className={s.buttonDropGroup}>
                            <a onClick={toggleDesktopAside} href="#">
                                <MdMenuOpen />
                            </a>
                            <a onClick={toggleDesktopAside} href="#">
                                <IoMdLock />
                            </a>
                        </div>
                    </div>

                    <div className={s.mobileMenuBars}>
                        <a onClick={toggleMobileAside} href="#">
                            <IoIosMenu />
                        </a>
                    </div>

                    <input
                        className={s.searchInput}
                        name="search"
                        type="text"
                        placeholder="Search for anything"
                    />
                </div>

                <div className={s.rightTopBar}>
                    <div className={s.icons}>
                        <IoSettingsOutline />
                        <BsBox />
                        <GoGlobe />
                        <IoNotificationsOutline />
                        <img src={dp} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
