import { useState } from "react";

export default function useDashboardNavbar() {
    const [dashboardLinks, setDashboardLinks] = useState([
        {
            category: "Application Intel",
            path: "application-intel",
            activeChild: false,
            links: [
                {
                    name: "Analytics Dashboard",
                    path: "analytics-dashboard",
                    isActive: false,
                },
                {
                    name: "Marketing Dashboard",
                    path: "marketing-dashboard",
                    isActive: false,
                },
            ],
        },
        {
            category: "Theme Settings",
            path: "theme-settings",
            activeChild: false,
            links: [
                {
                    name: "How it works",
                    path: "how-it-works",
                    isActive: false,
                },
                {
                    name: "Layer Options",
                    path: "layer-options",
                    figure: "100",
                    isActive: false,
                },
            ],
        },
    ]);
    return { dashboardLinks };
}
