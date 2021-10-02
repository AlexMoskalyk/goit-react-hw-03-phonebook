import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import styles from "./Main.module.css";
import Form from "../form/Form";
import { load, save } from "../services/localStorage";

class Main extends Component {
  state = {
    contacts: [
      { id: "id-1", contactName: "Rosie Simpson", contactNumber: "459-12-56" },
      { id: "id-2", contactName: "Hermione Kline", contactNumber: "443-89-12" },
      { id: "id-3", contactName: "Eden Clements", contactNumber: "645-17-79" },
      { id: "id-4", contactName: "Annie Copeland", contactNumber: "227-91-26" },
    ],

    filter: "",
  };

  componentDidMount() {
    const newContact = load("contacts");
    if (newContact) {
      this.setState({ contacts: newContact });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;

    save("contacts", contacts);
  }

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          id: uuidv4(),
          ...newContact,
        },
      ],
    }));
  };

  isThereContact = (contactName) =>
    this.state.contacts.some((contact) => contact.contactName === contactName);

  setFilterInState = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filtredContacts = () =>
    this.state.contacts.filter((contact) =>
      contact.contactName
        .toLowerCase()
        .includes(this.state.filter.toLowerCase())
    );

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.addContacts}>
            <h2>Add contact</h2>
            <Form
              addContact={this.addContact}
              isThereContact={this.isThereContact}
            />
          </div>
          <h2 className={styles.title}>Find contact</h2>

          <Filter
            setFilterInState={this.setFilterInState}
            filter={this.state.filter}
          />
          <h2>Contact list</h2>
          <ContactList
            filtredContacts={this.filtredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default Main;
