import React, { Component } from 'react';
import { FindContacts } from './FindContacts/FindContacts';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ContactsPhonebook } from './ContactsPhonebook/ContactsPhonebook';
import StaticContact from '../components/ContactsPhonebook/StaticContact.json';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: StaticContact,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    this.state.contacts.forEach(element => {
      if (element.name === name) {
        alert(`${name} is alredy in contacts`);
        return;
      }
    });
    const objData = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState({
      contacts: [objData, ...this.state.contacts],
    });
  };

  findName = event => {
    this.setState({ filter: event.target.value });
  };

  filteredName = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredArray = this.filteredName();
    return (
      <div
        style={{
          display: 'inline-flex',
          padding: 20,
          flexDirection: 'column',
          border: '2px solid black',
        }}
      >
        <h1>Phonebook</h1>
        <FormPhonebook onSubmit={this.formSubmitHandler} />
        <FindContacts onInput={this.findName} value={this.state.filter} />
        <h2>Contacts</h2>
        <ContactsPhonebook
          data={filteredArray}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
