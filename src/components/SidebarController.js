import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import MainScreenController from "./mainScreen/MainScreenController";

function SidebarController() {

  // * logic for displaying between Sidebar and MainScreenController components will go here

  return (
    <React.Fragment>
      <Sidebar />
      <MainScreenController />
    </React.Fragment>
  )
}

export default SidebarController