

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiGetContacts } from "./redux/contactsOps";

const App = () => {
 
  const dispatch = useDispatch()
  const isLoading = useSelector((state)=>state.contacts.loading)
  const error = useSelector((state)=>state.contacts.error)
 
  useEffect(()=>{ 
  
  {dispatch(apiGetContacts());}
 },[dispatch]
)
 
  return (
    <div
      style={{

        display: "block",
        flexDirection: "column",
        marginLeft: "20px",
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm  />
       <SearchBox   />  
   
      <ContactList />
   
    </div>
  );
};

export default App;
