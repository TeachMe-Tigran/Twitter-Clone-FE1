import React from "react";
import "./PrivateLayout.css";
import LeftSidebar from "../pages/LeftSidebar";
import RightSidebar from "../pages/RightSidebar";

const PrivateLayout = (props) => {
  return (
    <div className="privateLayoutContainer">
      <LeftSidebar />
      {props.children}
      <RightSidebar />
    </div>
  );
};

export default PrivateLayout;
