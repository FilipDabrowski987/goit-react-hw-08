import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from '../../redux/operations';
import Contact from './Contact';
import './Contact.css'

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name.toLowerCase());
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    return (
        <ul className='contact-item-list'>
            {filteredContacts.map(contact => (
                <li className='contact-item' key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                        id={contact.id}
                        deleteContacts={() => dispatch(deleteContacts(contact.id))}
                    />
                </li>
            ))
            }
        </ul>
    );
};

export default ContactList;