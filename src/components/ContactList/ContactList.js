import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const ContactList = ({ filter, contacts, onFilterContacts, onDelete }) => {
  return (
    <ul>
      {(filter ? onFilterContacts() : contacts).map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button color="secondary" type="button" id={id} onClick={onDelete}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
  onFilterContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
