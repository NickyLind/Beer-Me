import React, { useState } from 'react';
import { connect } from "react-redux";
import { selectedBeer, selectedBrewery } from '../../actions/index.js';


function Sidebar(props) {
  const handleClickLogin = () => {
    if (!props.loginVisible) {
      props.onDisplayLoginOnMain();
      props.onToggleSidebar();
    } else if (props.loginVisible === true) {
      props.onLogOut();
    }
  };
  //* maybe do something where i set the state of each individually using functions and call them all in a larger function
  //! const ClickingOffBeerState = () => {
  //!   const [beerState, setBeerState] = useState(props.newBeerFormVisible)
  //!   if (beerState !== false) {
  //!     setBeerState(false)
  //!   }
  //! }
  // * OR
  // function Counter() {

  //   const [bundle, setBundle] = useState({"hidden": true, "counter": 0});

  //   return (
  //     <React.Fragment>
  //       {bundle.hidden ? <h1>{bundle.counter}</h1> : <h1>Count Hidden</h1>}

  //       <button onClick={() => setBundle({...bundle, "counter": bundle.counter +1})}>Count!</button>
  //       <button onClick={() => setBundle({...bundle, "hidden": !bundle.hidden})}>Hide/Show</button>
  //     </React.Fragment>
  //   );
  // }

  const [state, setState] = useState({
    newBeerFormVisible: props.newBeerFormVisible,
    newBreweryFormVisible: props.newBreweryFormVisible,
    selectedBeer: props.selectedBeer,
    selectedBrewery: props.selectedBrewery,
    beerEditing: props.beerEditing,
    breweryEditing: props.breweryEditing,
  });

  const deselectState = () => {

    if (state !== {
      newBeerFormVisible: false,
      newBreweryFormVisible: false,
      selectedBeer: null,
      selectedBrewery: null,
      beerEditing: false,
      breweryEditing: false,
    }) {
      setState({
        newBeerFormVisible: false,
        newBreweryFormVisible: false,
        selectedBeer: null,
        selectedBrewery: null,
        beerEditing: false,
        breweryEditing: false,
      });
    }
  }
  const handleClickYourBreweries = () => {
    props.onDisplayFormsOnMain();
    props.onToggleSidebar();
    deselectState();
  };




  return (
    <React.Fragment>
      <hr />
      <h3><em>SideBar</em></h3>
      <hr />
      <button onClick={handleClickLogin} >{props.loginText}</button><br />
      <button onClick={handleClickYourBreweries}>{props.buttonText}</button><br />
      <hr />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    loginVisible: state.loginVisible,
    beerMeDetails: state.beerMeDetails,
    newBeerFormVisible: state.newBeerFormVisible,
    newBreweryFormVisible: state.newBreweryFormVisible,
    masterBeerList: state.masterBeerList,
    masterBreweryList: state.masterBreweryList,
    selectedBrewery: state.selectedBrewery,
    selectedBeer: state.selectedBeer,
    beerEditing: state.beerEditing,
    breweryEditing: state.breweryEditing,

  }
}

Sidebar = connect(mapStateToProps)(Sidebar)

export default Sidebar
// onClick={props.onToggleSidebar}