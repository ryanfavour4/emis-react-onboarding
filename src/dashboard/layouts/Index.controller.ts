import { useLayoutEffect, useState } from "react";

export default function useDashboardLayoutController() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    //?? ENABLING NAVBAR (ASIDES) STYLE FEATURES FOR EACH SCREEN SO STYLES OR FEATURES DON'T FOR MOBILE AND DESKTOP DON'T CLASH WITH EACH OTHER
    const [desktopAsideBool, setDesktopAsideBool] = useState(false);
    const [mobileAsideBool, setMobileAsideBool] = useState(false);
    //?? TOGGLE NAVBAR (ASIDES) FOR MOBILE AND DESKTOP
    const [isDesktopAsideOpen, setIsDesktopAsideOpen] = useState(true);
    const [isMobileAsideOpen, setIsMobileAsideOpen] = useState(true);

    function toggleDesktopAside(_e: any, value?: boolean) {
        console.log(isDesktopAsideOpen);

        if (value) {
            setIsDesktopAsideOpen(value);
        } else {
            setIsDesktopAsideOpen(!isDesktopAsideOpen);
        }
        console.log(value);
    }

    function toggleMobileAside(_e: any, value?: boolean) {
        if (value !== undefined) {
            setIsMobileAsideOpen(value);
        } else {
            setIsMobileAsideOpen(!isMobileAsideOpen);
        }
        console.log(value);
        console.log(isMobileAsideOpen);
    }

    useLayoutEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        if (windowWidth < 990) {
            setDesktopAsideBool(false);
            setMobileAsideBool(true);
        } else {
            setDesktopAsideBool(true);
            setMobileAsideBool(false);
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    return {
        mobileAsideBool,
        isMobileAsideOpen,
        toggleMobileAside,
        desktopAsideBool,
        isDesktopAsideOpen,
        toggleDesktopAside,
    };
}
