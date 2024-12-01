import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations"; // Upewnij się, że ścieżka jest poprawna
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import { DocumentTitle } from "../components/DocumentTitle.jsx";

export default function ContactsPage() {
    
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector((state) => state.contacts);

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <DocumentTitle>Contacts</DocumentTitle>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ContactList contacts={items} />
        </div>
    ) 
}