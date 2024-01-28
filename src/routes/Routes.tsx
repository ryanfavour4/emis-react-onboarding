import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../layouts/loading/Loading";
import DashboardRoutes from "../dashboard/routes/Routes";
import DashboardLayout from "../dashboard/layouts/Index";
import Onboarding from "../pages/onboarding/Onboarding";

// !! ========= LAZY LOAD HEAVY PAGES ======= !! //
const Login = lazy(() => import("../pages/auth/login/Login"));
const Signup = lazy(() => import("../pages/auth/signup/Signup"));
const Verify = lazy(() => import("../pages/auth/verify-email/Verify"));
const RegisterType = lazy(
    () => import("../pages/auth/register-type/RegisterType")
);

const Routers = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/get-started" element={<Signup />} />
                    <Route path="/verify-email" element={<Verify />} />
                    <Route path="/register-type" element={<RegisterType />} />
                    <Route path="/onboarding/*" element={<Onboarding />} />

                    {/*//?? ==== DASHBOARD ROUTE ==== */}
                    {/*//?? ==== DASHBOARD ROUTE ==== */}
                    <Route path="/dashboard/*" element={<DashboardLayout />}>
                        <Route path="*" element={<DashboardRoutes />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default Routers;
