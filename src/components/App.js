import React, { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    let contactId = nanoid();
    const currentContacts = [...contacts];
    const names = currentContacts.map(contact => contact.name);
    console.log(names);

    if (!names.find(el => el === name)) {
      setContacts([
        ...currentContacts,
        { id: contactId, name: name, number: number },
      ]);
      // setContacts(contacts);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const deleteContact = id => {
    const currentContacts = [...contacts];
    const index = currentContacts.findIndex(person => person.id === id);
    currentContacts.splice(index, 1);
    setContacts(currentContacts);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const filteredList = () => {
    return contacts.filter(
      contact =>
        filter === '' ||
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const storageContacts = JSON.parse(localStorage.getItem('contacts')) || [];

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');
    setContacts(storageContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div style={{ marginLeft: '50px' }}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} deleteContact={deleteContact} />
      <h1>Contacts</h1>
      <Filter change={handleFilter} value={filter} />
      <ContactList list={filteredList()} deleteContact={deleteContact} />
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
