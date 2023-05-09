import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './FormPhonebook.module.css';
import { nanoid } from 'nanoid';

export class FormPhonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  


  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form} htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />
        </label>
        <label className={css.form} htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handleInputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

FormPhonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};