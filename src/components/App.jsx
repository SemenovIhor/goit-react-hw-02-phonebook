import React, { Component } from "react";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList'
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  formSubmitHandler = data => {
    console.log(data)
      if (this.state.contacts.some(contact =>  contact.name.toLowerCase() === data.name.toLowerCase())) {
        alert("Hello");
      } else {
        this.setState(prevState => {
          return { contacts: [...prevState.contacts, data] };
        });
      }
  }
  
  filterInput = e => {
    this.setState(
      {filter: e.filter} 
    );
  }
  
  contactDelete = newState => {
    console.log(newState)
    this.setState(
      {contacts: newState} 
    );
  }

  render () {
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            onSubmit = {this.formSubmitHandler}
          />  
        </Section>
        <Section title="Contacts">
          <Filter
            onChange = {this.filterInput}
          />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onClick = {this.contactDelete}
          />
        </Section>
      </div>
    );
  }
};
