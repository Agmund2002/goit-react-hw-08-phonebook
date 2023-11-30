import { Navigation } from "components/Navigation/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { BarLoader } from 'react-spinners';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<BarLoader />} >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
