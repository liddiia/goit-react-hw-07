import { useSelector } from "react-redux";
import { useMemo } from "react";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase().trim())
    );
  }, [contacts, filters]);

  if (contacts.length === 0) {
    return <p>Phonebook is empty. Add contacts.</p>;
  }

  return (
    <div>
      <h2>Contacts</h2>
      <ul className={css.listBox}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <ContactItem id={contact.id} name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
