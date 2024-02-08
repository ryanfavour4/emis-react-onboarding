/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import s from "./DashboardNavbar.module.css";
import logo from "../../../assets/icons/logo.png";
import userDp from "../../../assets/images/handsome-adult-male-posing.jpg";
import { Link } from "react-router-dom";

export default function DashboardNavbar() {
    const accordionItems = [
        { title: "Section 1", content: "Content for Section 1" },
        { title: "Section 2", content: "Content for Section 2" },
        { title: "Section 3", content: "Content for Section 3" },
    ];

    return (
        <div className={s.LevelNavbar}>
            <div className={s.logoBox}>
                <img src={logo} alt="Flicks Solution Logo" />
                <BsChevronDown />
            </div>
            <div className={s.finderAndBioCard}>
                <div className={s.finder}>
                    <div className={s.finderInputBox}>
                        <input type="text" placeholder="Filer menu" />
                        <a href="#">
                            <BsChevronUp />
                        </a>
                    </div>
                    <div className={s.finderDropDown}>
                        <BsChevronDown />
                    </div>
                </div>
                <div className={s.bioCard}>
                    <div className={s.bioCardCenterContent}>
                        <img src={userDp} alt="user" />
                        <span>
                            <h4>Dr. Codex Lantern</h4>
                            <p>Toronto, Canada</p>
                        </span>
                    </div>
                </div>
                <div className="">
                    <ul>
                        <li>
                            <Link to={"/"}>Application Intel</Link>
                        </li>
                    </ul>

                    <AccordionComponent items={accordionItems} />
                </div>
            </div>
        </div>
    );
}

// ????? ===================== REUSABLE ACCORDION COMPONENT =================== ?????? //
// ????? ===================== REUSABLE ACCORDION COMPONENT =================== ?????? //
type AccordionComponentProps = {
    items: {
        title: string;
        content: JSX.Element | string;
    }[];
};

export const AccordionComponent = ({ items }: AccordionComponentProps) => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const handleClick = (index: number) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div id="faq" className={s.accordion}>
            {items.map((item, index) => (
                <div className={s.accordionItem} key={index}>
                    <button
                        className={s.accordionButton}
                        onClick={() => handleClick(index)}
                    >
                        <p>{item.title}</p>
                        <p className={s.accordionIcon}>+</p>
                    </button>
                    {activeIndex === index && (
                        <div className={s.accordionContent}>{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};
