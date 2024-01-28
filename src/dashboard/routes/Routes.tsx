import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../../layouts/loading/Loading";
import Test from "../pages/Test";

const DashboardRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/home" element={<Test />} />
                    <Route
                        path="/testing-route"
                        element={<h2>DON'T GET BROKE IF PATH IS LONG</h2>}
                    />
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
