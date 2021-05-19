import Home from "./Home";
import React from "react";
import { connect } from "react-redux";

function HomeController(props) {

  if (props.homepageVisible) {
    return (
      <Home />
    )
  } else {
    return (
      <h3>loading....</h3>
    )
  }

}

const mapStateToProps = state => {
  return {
    homepageVisible: state.homepageVisible
  }
}

HomeController = connect(mapStateToProps)(HomeController)

export default HomeController
