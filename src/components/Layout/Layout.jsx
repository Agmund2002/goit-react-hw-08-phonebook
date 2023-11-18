import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { BarLoader } from 'react-spinners';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <UserMenu />
      <main>
        <Suspense fallback={<BarLoader />} >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
