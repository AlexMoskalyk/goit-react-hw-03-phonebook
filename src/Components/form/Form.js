import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
  state = { contactName: "", contactNumber: "" };

  onHandleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ contactName: "", contactNumber: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.isThereContact(this.state.contactName)) {
      return alert(
        `${this.state.contactName} has been already in contact list`
      );
    }
    this.props.addContact(this.state);
    this.reset();
  };
  render() {
    return (
      <>
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              value={this.state.contactName}
              onChange={this.onHandleChange}
              type="text"
              name="contactName"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Telefon
            <input
              value={this.state.contactNumber}
              onChange={this.onHandleChange}
              type="tel"
              name="contactNumber"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button className={styles.formBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;

//
