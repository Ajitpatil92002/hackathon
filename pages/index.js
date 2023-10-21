import React from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Lists from "../components/lists";

const index = () => {
  return (
    <div id="main" className=" bg-background font-sans antialiased">
      <NavBar />
      <div className="container mt-5 px-10 bg-slate-400/20 ">
        <Header
          title={"Maintenance"}
          btnLink={""}
          btnText={"Add Maintenance"}
        />
        <Lists />
        {/* <CreateMaintenanceRequest /> */}
      </div>
    </div>
  );
};

export default index;
