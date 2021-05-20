import React from 'react';
import classes from "./ReusableForm.module.css"


function ReusableBreweryForm(props) {

  return (
    <React.Fragment>
      <h3><em>Reusable Brewery Form</em></h3>
      <hr />
      <form onSubmit={props.formSubmissionHandler}>
        <input
          className={classes.input}
          type="text"
          name="name"
          placeholder="Brewery Name"
          required
        />
        <input
          className={classes.input}
          type="text"
          name="location"
          placeholder="Brewery Location"
          required
        />
        <input
          className={classes.input}
          type="text"
          name="description"
          placeholder="Brewery Description"
          required
        />
        <button className={classes.button}>submit</button>
      </form>
      <hr />
      <button className={classes.button} onClick={props.onAddNewBrewery}>Go back</button>
    </React.Fragment>
  )
}

export default ReusableBreweryForm;