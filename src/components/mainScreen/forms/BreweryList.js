import React from 'react';

function BreweryList(props) {

  const scrollBox = {
    height: "100px",
    width: "200px",
    border: "1px solid #ccc",
    font: "16px/26px Georgia, Garamond, Serif",
    overflow: "auto"
  }

  return (
    <React.Fragment>
      <hr />
      <h3><em>Brewery List Component</em></h3>
      <hr />
      <div style={scrollBox}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
</p>
      </div>
      <button onClick={props.onAddNewBeer}>Add new beer</button>
      <button>add new brewery</button>
      <hr />
    </React.Fragment>
  );
};

export default BreweryList;

