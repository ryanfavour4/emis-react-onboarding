import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../../layouts/loading/Loading";
import Test from "../pages/Test";

const AnalyticsDashboard = lazy(
    () =>
        import(
            "../pages/application-intel/analytics-dashboard/AnalyticsDashboard"
        )
);

const DashboardRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route
                        path="/application-intel/analytics-dashboard"
                        element={<AnalyticsDashboard />}
                    />
                    <Route path="/home" element={<Test />} />
                    <Route
                        path="*"
                        element={<h2>THIS PATH DOES NOT EXIST</h2>}
                    />
                </Routes>
            </Suspense>
        </>
    );
};

export default DashboardRoutes;
