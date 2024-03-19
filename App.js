import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/Homepage";
import AboutUs from "./pages/aboutus";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import WeddingRegistrationForm from "../src/pages/wedding";
import ConfirmationPage from "../src/pages/confirmation";
import FAQ from "../src/pages/faq";
import TermsAndConditions from "../src/pages/terms";
import PrivacyPolicy from "../src/pages/privacy";
import ContactUs from "../src/pages/contactus";
import Layout from "../src/pages/layout";
import Service from "./pages/services";
import WeddingDecorationPage from "./pages/weddingdecoration";
import GoldenPackageBirthday from "./pages/bgold";
import PremiumPackageBirthday from "./pages/bpremium";
import GoldenPackageMarriage from "./pages/mgold";
import PremiumPackageMarriage from "./pages/mpremium";
import GoldenPackageMusic from "./pages/musicgold";
import PremiumPackageMusic from "./pages/musicpremium";
import BirthdayDecorationPage from "./pages/birthdaydecoration";
import MusicDecorationPage from "./pages/musicdecoration";
import Admin from "./pages/admin";
import MusicRegistrationForm from "./pages/musicform";
import BirthdayRegistrationForm from "./pages/birthdayform";
import MarriageList from "./pages/viewdetailsmarriage";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/homepage"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />{" "}
            {/* Wrap Home component with Layout */}
            <Route
              path="/aboutus"
              element={
                <Layout>
                  <AboutUs />
                </Layout>
              }
            />{" "}
            {/* Wrap AboutUs component with Layout */}
            <Route
              path="/weddingform"
              element={
                <Layout>
                  <WeddingRegistrationForm />
                </Layout>
              }
            />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/faq"
              element={
                <Layout>
                  <FAQ />
                </Layout>
              }
            />
            <Route
              path="/termsandconditions"
              element={
                <Layout>
                  <TermsAndConditions />
                </Layout>
              }
            />
            <Route
              path="/privacypolicy"
              element={
                <Layout>
                  <PrivacyPolicy />
                </Layout>
              }
            />
            <Route
              path="/contactus"
              element={
                <Layout>
                  <ContactUs />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <Service />
                </Layout>
              }
            />
            <Route
              path="/weddingdecoration"
              element={<WeddingDecorationPage />}
            />
            <Route
              path="/birthdaydecoration"
              element={<BirthdayDecorationPage />}
            />
            <Route path="/musicdecoration" element={<MusicDecorationPage />} />
            <Route
              path="/goldenpackage/birthday"
              element={<GoldenPackageBirthday />}
            />
            <Route
              path="/goldenpackage/marriage"
              element={<GoldenPackageMarriage />}
            />
            <Route
              path="/goldenpackage/music"
              element={<GoldenPackageMusic />}
            />
            <Route
              path="/premiumpackage/music"
              element={<PremiumPackageMusic />}
            />
            <Route
              path="/premiumpackage/birthday"
              element={<PremiumPackageBirthday />}
            />
            <Route
              path="/premiumpackage/marriage"
              element={<PremiumPackageMarriage />}
            />
            <Route path="/musicform" element={<MusicRegistrationForm />} />
            <Route
              path="/birthdayform"
              element={<BirthdayRegistrationForm />}
            />
            <Route path="/viewdetails/marriage" element={<MarriageList />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
