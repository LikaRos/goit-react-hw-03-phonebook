import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  onSubmit = event => {
    event.preventDefault();
    const id = nanoid();

    const contact = { ...this.state, id };

    this.props.addContactData(contact);
    //  console.log(this.props);
    this.setState({ name: '', phone: '' });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <h1>Phonebook</h1>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Phone
            <input
              className={styles.input}
              type="phone"
              name="phone"
              value={phone}
              required
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.button} type="submit">
            Add contacts
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContactData: PropTypes.func.isRequired,
};
