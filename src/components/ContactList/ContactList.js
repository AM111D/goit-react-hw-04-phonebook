import React from 'react';
import ContactListElement from 'components/ContactListElement/ContactListElement';
import propTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = props => {
  return (
    <ul className={css.contactlist}>
      {props.list.map(contact => (
        <ContactListElement
          key={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={() => props.deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      deleteContact: propTypes.func,
    })
  ),
};

export default ContactList;
