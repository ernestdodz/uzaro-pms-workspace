import { RouteObject } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import MainLayout from "../layouts/MainLayout";
import ReservationPage from "../pages/ReservationPage";
import FinancePage from "../pages/FinancePage";

export const app = {
  routes: [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "/reservation",
          element: <ReservationPage />,
        },
        {
          path: "/finance",
          element: <FinancePage />,
        },
      ],
    },
  ] as RouteObject[],
  //   topNavigation: [
  //     {}
  //   ],
};
