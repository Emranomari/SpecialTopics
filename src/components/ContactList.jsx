import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contact-list">
      <h2>Contacts:</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              index={index}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;