import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import './Contact.css'

const Contact = ({ name, phone, deleteContacts }) => {
    return (
        <div className="contact-card">
            <div >
                <div>
                <p><IoPerson/>  {name}</p>
                </div>
                <div>
                <p><FaPhoneAlt/>  {phone}</p>
                </div>
            </div>
            <button className="delete-contacts-button" onClick={deleteContacts}>Delete</button>
        </div>
    );
};
export default Contact