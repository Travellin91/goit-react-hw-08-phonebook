import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectFilteredContacts } from '../../redux/contactsSlice';
import './contactlist.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  if (!contacts) {
    return null;
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li className="contact-item" key={contact.id}>
          <span className="contact-name">{contact.name}</span> -{' '}
          <span className="contact-number">{contact.number}</span>
          <button
            className="contact-delete-button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
