import React from 'react';

function ReusableBreweryForm(props) {

  return (
    <React.Fragment>
      <h3><em>Reusable Brewery Form</em></h3>
      <hr />
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Brewery Name"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Brewery Location"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Brewery Description"
          required
        />
        <button>submit</button>
      </form>
      <hr />
      <button onClick={props.onAddNewBrewery}>Go back</button>
    </React.Fragment>
  )
}

export default ReusableBreweryForm;