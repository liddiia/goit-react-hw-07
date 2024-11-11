import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";
import { selectFilterContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);

  return ( 
    <div>
      <h2>Contacts</h2>
      {contacts.length !== 0 && (
        <ul className={css.listBox}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <ContactItem id={contact.id} name={contact.name} number={contact.number} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
