import React, { useState } from 'react';
import { connect } from "react-redux";
import { selectedBeer, selectedBrewery } from '../../actions/index.js';
import { Link } from "react-router-dom";


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


  const handleToggleSideBar = () => {
    props.onToggleSidebar();
  };

  return (
    <React.Fragment>
      <hr />
      <h3><em>SideBar</em></h3>
      <hr />
      <Link to="/" onClick={handleToggleSideBar}>Home</Link><br />
      <Link to="/login" onClick={handleClickLogin} >{props.loginText}</Link><br />
      <Link to="/userBreweries" onClick={handleToggleSideBar}>Your Breweries</Link><br />
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