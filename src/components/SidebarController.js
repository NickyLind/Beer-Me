import Sidebar from "./sidebar/Sidebar";
import MainScreenController from "./mainScreen/MainScreenController";

function SidebarController() {

  return (
    <React.Fragment>
      <Sidebar />
      <MainScreenController />
    </React.Fragment>
  )
}

export default SidebarController