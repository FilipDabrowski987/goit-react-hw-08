import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { addContacts } from '../../redux/operations';
import './ContactForm.css'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Name should only contain letters and spaces')
        .min(2, 'Contact name too short')
        .max(50, "Contact name too Long!")
        .required("Required"),
    phone: Yup.string()
        .matches(/^[0-9()+\-.\s]+$/, 'Number should only contain digits and valid symbols (+, -, (), .)')
        .min(2, 'Contact number too short')
        .max(50, "Contact number too Long!")
        .required("Required"),
});

const ContactForm = () => {
const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContacts({
            id: nanoid(),
            name: values.name,
            phone: values.phone,
        }));
        actions.resetForm();
    };
     
    return (
        <Formik
            initialValues={{ name: "", phone: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
        <Form className='new-contact-form'>
                <label className='new-contact-form-label'>Name</label>
                <Field  type="text" name="name" className='new-contact-form-field'/>
                <ErrorMessage name="name" as="span" />
                <label className='new-contact-form-label'>Number</label>
                <Field type="text" name="phone" className='new-contact-form-field' />
                <ErrorMessage name="phone" as="span"  />
                <div >
                    <button className='new-contact-form-button' type="submit">Add contact</button>
                </div>
        </Form>
    </Formik>
  );
};
export default ContactForm;