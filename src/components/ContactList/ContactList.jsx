import React, { Component } from "react";

export class  ContactList extends Component {

  handleRemove = (id) => {
    const newList = this.props.contacts.filter((item) => item.id !== id);
    this.props.onClick(newList);
  }

  render () {
    const arrayFilter = this.props.contacts.filter(contact => contact.name.toUpperCase().includes(this.props.filter.toUpperCase()))
    return (
      <ul>
        { arrayFilter.map(({id, ...contacts }) => (
          <li key={id}>
            <p>{contacts.name}:{contacts.number}</p>
            <button type="button" id = {id}  onClick = {() => this.handleRemove(id)}>Delete</button>
          </li> 
        ))}
      </ul>
    );
  }
}
