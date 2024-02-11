import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RatingHistory from "./pages/RatingHistory";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const AllRouter = () => {

  return (
    <>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rating/:username" element={<RatingHistory />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default AllRouter;
