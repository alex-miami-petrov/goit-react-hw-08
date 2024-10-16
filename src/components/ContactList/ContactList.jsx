import React, { useEffect } from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact as deleteContactAsync } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <ul className={s.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={s.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
