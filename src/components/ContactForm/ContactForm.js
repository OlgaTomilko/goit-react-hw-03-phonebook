import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  form: {
    width: 275,
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

const ContactForm = ({ onInputChange, onButtonClick }) => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <label>Name</label>
      <input type="text" onChange={onInputChange} id="name"></input>
      <label>Number</label>
      <input type="text" onChange={onInputChange} id="number"></input>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={onButtonClick}
      >
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default ContactForm;
