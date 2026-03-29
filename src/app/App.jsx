import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import DashboardPlaceholder from "../pages/DashboardPlaceholder";
import LandingPage from "../pages/LandingPage";
import { APP_ROUTES } from "../lib/routes";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={APP_ROUTES.landing} element={<LandingPage />} />
        <Route path={APP_ROUTES.dashboard} element={<DashboardPlaceholder />} />
        <Route path="*" element={<Navigate to={APP_ROUTES.landing} replace />} />
      </Route>
    </Routes>
  );
}

export default App;
