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

  handleInputChange = (event) => {
    const option = event.target.id;
    this.setState((prevState) => ({ [option]: event.target.value }));
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    this.isAlreadyContact()
      ? alert(`${this.state.name} is already in contacts.`)
      : this.setState((prevState) => ({
          contacts: [
            ...this.state.contacts,
            { id: uuidv4(), name: this.state.name, number: this.state.number },
          ],
        }));
  };

  handleInputFind = (event) => {
    this.setState((prevState) => ({
      filter: event.target.value,
    }));
  };

  filterContactsList = () => {
    const filterContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filterContacts;
  };

  isAlreadyContact = () => {
    const Names = this.state.contacts.map((contact) => contact.name);
    const isAlreadyContact = Names.includes(this.state.name);
    return isAlreadyContact;
  };

  index = (value) => {
    const ids = this.state.contacts.map((contact) => contact.id);
    const index = ids.indexOf(value);
    return index;
  };

  handleButtonDelete = (event) => {
    this.state.contacts.splice(this.index(event.target.id), 1);
    this.setState((prevState) => ({ ...prevState }));
  };

  render() {
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
          filter={this.state.filter}
          contacts={this.state.contacts}
          onFilterContacts={this.filterContactsList}
          onDelete={this.handleButtonDelete}
        />
      </div>
    );
  }
}

export default Phonebook;
