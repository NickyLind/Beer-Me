import SelectorController from "./selector/SelectorController";
import FormController from "./forms/FormController";
import LogInController from "./login/LogInController";

function MainScreenController() {

  // * Logic for displaying between SelectorController, FormController, and LogInController components will go here

  return (
    <React.Fragment>
      <SelectorController />
      <FormController />
      <LogInController />
    </React.Fragment>
  );
};

export default MainScreenController