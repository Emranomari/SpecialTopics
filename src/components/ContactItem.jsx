import React from 'react';

function ContactItem({ contact, index, deleteContact }) {
  return (
    <li className="contact-item">
      <span>
        {index + 1}. {contact.name} - {contact.email}
      </span>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
}

export default ContactItem;