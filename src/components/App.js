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

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');
    const storageContacts = JSON.parse(localStorage.getItem('contacts')) || [];
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

export default App;
