import React from 'react';
import propTypes from 'prop-types';
import css from './ContactListElement.module.css';

const ContactListElement = props => {
  return (
    <li className={css.contactElement}>
      <p>{props.name}:</p>
      <p>{props.number}</p>
      <button
        className={css.button}
        type="button"
        onClick={props.deleteContact}
      >
        Delete
      </button>
    </li>
  );
};

ContactListElement.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default ContactListElement;
