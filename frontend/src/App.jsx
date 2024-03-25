import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

let Login = lazy(() => import("../pages/SignIn"));
let SignUp = lazy(() => import("../pages/SignUp"));
let Home = lazy(() => import("../pages/Home"));
let Profile = lazy(() => import("../pages/Profile"));
let SendGift = lazy(() => import("../pages/SendGift"));
let ShowGift = lazy(() => import("../pages/ShowGift"));
let Admin = lazy(() => import("../pages/Admin"));
let Users = lazy(() => import("../pages/admin/Users"));
let Gifts = lazy(() => import("../pages/admin/Gifts"));
let Modifyusers = lazy(() => import("../pages/admin/ModifyUser"));
let Modifygifts = lazy(() => import("../pages/admin/ModifyGift"));
let EditUser = lazy(() => import("../pages/admin/EditUser"));
let EditGift = lazy(() => import("../pages/admin/EditGift"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Admin */}
          <Route
            path="/admin"
            element={
              <Suspense fallback={"Admin loading..."}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path="/admin/users"
            element={
              <Suspense fallback={"admin users loading..."}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path="/admin/gifts"
            element={
              <Suspense fallback={"admin gifts loading..."}>
                <Gifts />
              </Suspense>
            }
          />
          <Route
            path="/admin/modifygifts"
            element={
              <Suspense fallback={"admin modify gifts loading..."}>
                <Modifygifts />
              </Suspense>
            }
          />
          <Route
            path="/admin/modifyusers"
            element={
              <Suspense fallback={"admin modify users loading..."}>
                <Modifyusers />
              </Suspense>
            }
          />
          <Route
            path="/admin/edituser/*"
            element={
              <Suspense fallback={"admin edit user loading..."}>
                <EditUser />
              </Suspense>
            }
          />
          <Route
            path="/admin/editgift/*"
            element={
              <Suspense fallback={"admin edit user loading..."}>
                <EditGift />
              </Suspense>
            }
          />
          {/* End Admin */}

          <Route
            path="/"
            element={
              <Suspense fallback={"Home loading..."}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/gifts"
            element={
              <Suspense fallback={"Gifts loading..."}>
                <ShowGift />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={"Profile loading..."}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/sendgift"
            element={
              <Suspense fallback={"send gift loading..."}>
                <SendGift />
              </Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <Suspense fallback={"Sign in loading..."}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={"Sign up Loading..."}>
                <SignUp />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
