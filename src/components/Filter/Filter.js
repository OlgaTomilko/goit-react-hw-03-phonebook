import PropTypes from "prop-types";

const Filter = ({ onInputFind }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={onInputFind} id="find"></input>
    </div>
  );
};

Filter.propTypes = {
  onInputFind: PropTypes.func.isRequired,
};

export default Filter;
