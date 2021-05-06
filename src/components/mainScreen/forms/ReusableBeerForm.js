import React from 'react';


function ReusableBeerForm(props) {



  return (
    <React.Fragment>
      <h3><em>Reusable Beer Form</em></h3>
      <hr />
      <form>
        <input>
        </input>
        <input>
        </input>
        <input>
        </input>
        <input>
        </input>
        <input>
        </input>
        <input>
        </input>
      </form>
      <hr />
      <button>submit</button>
      <button onClick={props.onAddNewBeer}>Go back</button>
    </React.Fragment>
  )
}

export default ReusableBeerForm;