import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "../pages/home/home";

const Error = lazy(() => import("../pages/error/error"));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Error />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
