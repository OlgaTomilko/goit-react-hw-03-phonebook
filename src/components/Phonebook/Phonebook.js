// import React, { useState } from "react";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

// ========== HOOK =============

// const Phonebook = () => {
//   const [items, setItems] = useState({
//     contacts: [],
//     filter: "",
//   });

//   const handleInputChange = (event) => {
//     const option = event.target.id;
//     setItems((prevState) => ({ ...prevState, [option]: event.target.value }));
//   };

//   const handleButtonClick = (event) => {
//     event.preventDefault();

//     isAlreadyContact()
//       ? alert(`${items.name} is already in contacts.`)
//       : setItems((prevState) => ({
//           ...prevState,
//           contacts: [
//             ...items.contacts,
//             { id: uuidv4(), name: items.name, number: items.number },
//           ],
//         }));
//   };

//   const handleInputFind = (event) => {
//     setItems((prevState) => ({
//       ...prevState,
//       filter: event.target.value,
//     }));
//   };

//   const filterContactsList = () => {
//     const filterContacts = items.contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(items.filter.toLowerCase())
//     );
//     return filterContacts;
//   };

//   const isAlreadyContact = () => {
//     const Names = items.contacts.map((contact) => contact.name);
//     const isAlreadyContact = Names.includes(items.name);
//     return isAlreadyContact;
//   };

//   const index = (value) => {
//     const ids = items.contacts.map((contact) => contact.id);
//     const index = ids.indexOf(value);
//     return index;
//   };

//   const handleButtonDelete = (event) => {
//     items.contacts.splice(index(event.target.id), 1);
//     setItems((prevState) => ({ ...prevState }));
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm
//         onInputChange={handleInputChange}
//         onButtonClick={handleButtonClick}
//       />

//       <h2>Contacts</h2>
//       <Filter onInputFind={handleInputFind} />
//       <ContactList
//         filter={items.filter}
//         contacts={items.contacts}
//         onFilterContacts={filterContactsList}
//         onDelete={handleButtonDelete}
//       />
//     </div>
//   );
// };

// =========== CLASS =============

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleInputChange = (event) => {
    const option = event.target.id;
    this.setState(() => ({ [option]: event.target.value }));
  };

  handleButtonClick = (event) => {
    const { name, number, contacts } = this.state;
    event.preventDefault();
    this.isAlreadyContact()
      ? alert(`${name} is already in contacts.`)
      : this.setState(() => ({
          contacts: [...contacts, { id: uuidv4(), name: name, number: number }],
        }));
  };

  handleInputFind = (event) => {
    this.setState(() => ({
      filter: event.target.value,
    }));
  };

  filterContactsList = () => {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  isAlreadyContact = () => {
    const { contacts } = this.state;
    const Names = contacts.map((contact) => contact.name);
    const isAlreadyContact = Names.includes(this.state.name);
    return isAlreadyContact;
  };

  handleButtonDelete = (event) => {
    const { contacts } = this.state;
    const filterContacts = contacts.filter(
      (contact) => contact.id !== event.currentTarget.id
    );

    this.setState(() => ({ contacts: filterContacts }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onInputChange={this.handleInputChange}
          onButtonClick={this.handleButtonClick}
        />
        <h2>Contacts</h2>
        <Filter onInputFind={this.handleInputFind} />
        <ContactList
          filter={filter}
          contacts={contacts}
          onFilterContacts={this.filterContactsList}
          onDelete={this.handleButtonDelete}
        />
      </div>
    );
  }
}

export default Phonebook;
