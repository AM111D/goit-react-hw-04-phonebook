import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

function App() {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    let contactId = nanoid();
    let contacts = [...this.state.contacts];
    const names = contacts.map(contact => contact.name);
    console.log(names);

    if (!names.find(el => el === name)) {
      contacts = [...contacts, { id: contactId, name: name, number: number }];
      this.setState({
        contacts,
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  deleteContact = id => {
    const contacts = [...this.state.contacts];
    const index = contacts.findIndex(person => person.id === id);
    contacts.splice(index, 1);
    this.setState({
      contacts,
    });
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  // componentDidMount() {
  //   const storageContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (storageContacts) {
  //     this.setState({
  //       contacts: storageContacts,
  //     });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // render() {
  //   const { filter, contacts } = this.state;

  //   const list = contacts.filter(
  //     contact =>
  //       this.state.filter === '' ||
  //       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
  //   );

  return (
    <div style={{ marginLeft: '50px' }}>
      <h1>Phonebook</h1>
      <ContactForm
        addContact={this.addContact}
        deleteContact={this.deleteContact}
      />
      <h1>Contacts</h1>
      <Filter change={this.handleFilter} value={filter} />
      <ContactList list={list} deleteContact={this.deleteContact} />
    </div>
  );
}

// export class oldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = (name, number) => {
//     let contactId = nanoid();
//     let contacts = [...this.state.contacts];
//     const names = contacts.map(contact => contact.name);
//     console.log(names);

//     if (!names.find(el => el === name)) {
//       contacts = [...contacts, { id: contactId, name: name, number: number }];
//       this.setState({
//         contacts,
//       });
//     } else {
//       alert(`${name} is already in contacts`);
//     }
//   };

//   deleteContact = id => {
//     const contacts = [...this.state.contacts];
//     const index = contacts.findIndex(person => person.id === id);
//     contacts.splice(index, 1);
//     this.setState({
//       contacts,
//     });
//   };

//   handleFilter = e => {
//     this.setState({
//       filter: e.target.value,
//     });
//   };

//   componentDidMount() {
//     const storageContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (storageContacts) {
//       this.setState({
//         contacts: storageContacts,
//       });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter, contacts } = this.state;

//     const list = contacts.filter(
//       contact =>
//         this.state.filter === '' ||
//         contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );

//     return (
//       <div style={{ marginLeft: '50px' }}>
//         <h1>Phonebook</h1>
//         <ContactForm
//           addContact={this.addContact}
//           deleteContact={this.deleteContact}
//         />
//         <h1>Contacts</h1>
//         <Filter change={this.handleFilter} value={filter} />
//         <ContactList list={list} deleteContact={this.deleteContact} />
//       </div>
//     );
//   }
// }

export default App;
