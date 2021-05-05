import SelectorController from "./selector/SelectorController";
import FormController from "./forms/FormController";
import LoginController from "./login/LoginController";

function MainScreenController() {

  return (
    <React.Fragment>
      <SelectorController />
      <FormController />
      <LoginController />
    </React.Fragment>
  );
};

export default MainScreenController