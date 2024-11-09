import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./ContactItem.module.css";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };
  return (
    <div className={css.contactItem}>
      <div className={css.contactItemData}>
        <p className={css.contactN}>
          <span className={css.contactItemTitel}>
            &#128100; <b>Name:</b>{" "}
          </span>{" "}
          {name}
        </p>
        <p className={css.contactN}>
          <span className={css.contactItemTitel}>
            &#128222;<b> Number:</b>{" "}
          </span>
          {number}
        </p>
      </div>
      <button
        onClick={() => onDelContact(id)}
        type="button"
        className={css.contactDelButton}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
