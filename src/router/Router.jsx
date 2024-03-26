import { Route, Routes } from "react-router-dom";
import Header from "../design/Header";
import Header_home from "../design/Header_home";
import Application from "../design/Application";
import Footer from "../design/Footer";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/step_one" element={<Header />} />
        <Route path="/" element={<Header_home />} />
        <Route path="/step_on" element={<Application />} />
        <Route path="/step" element={<Footer />} />
      </Routes>
    </>
  );
};
export default Router;
