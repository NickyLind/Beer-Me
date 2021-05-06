import React from 'react';

function ReusableBreweryForm(props) {

  return (
    <React.Fragment>
      <h3><em>Reusable Brewery Form</em></h3>
      <hr />
      <form>
        <input>
        </input>
        <input>
        </input>
        <input>
        </input>
      </form>
      <hr />
      <button>submit</button>
      <button onClick={props.onAddNewBrewery}>Go back</button>
    </React.Fragment>
  )
}

export default ReusableBreweryForm;