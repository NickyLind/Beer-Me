

function Selector() {

  return (
    <React.Fragment>
      <hr />
      <h3><em>Selector</em></h3>
      <hr />
      <label>Beer Type</label>
      <select>
        <option>Lager</option>
        <option>IPA</option>
        <option>Cider</option>
      </select>
      <label>Brewery</label>
      <select>
        <option>Rogue</option>
        <option>Fortside</option>
        <option>Pfriem</option>
      </select>
      <button>Beer Me!</button>
      <hr />
    </React.Fragment>
  );
};

export default Selector;