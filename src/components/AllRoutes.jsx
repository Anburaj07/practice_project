import React from "react";
import { Route, Routes } from "react-router-dom";
import NewDevs from "../pages/NewDevs";
import Info from "../pages/Info";
// import Homepage from '../pages/Homepage'

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Homepage/>}/> */}
      <Route path="/" element={<NewDevs/>}/>
      <Route path="/next" element={<Info/>} />
    </Routes>
  );
};

export default AllRoutes;
