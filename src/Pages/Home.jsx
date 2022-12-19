import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Profile from "./Profile";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound switchValue="home" />} />
      </Routes>
      <div>Home</div>
      <Outlet />
    </>
  );
};

export default Home;
