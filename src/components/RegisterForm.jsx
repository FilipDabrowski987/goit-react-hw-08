import { useDispatch } from "react-redux";
import { register } from "../redux/operations";
import './Navigation.css'

export default function RegisterForm() {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const password = form.elements.password.value.trim();
        
        if (!name || !email || !password) {
            alert("All fields are required.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        try {
            await dispatch(register({ name, email, password })).unwrap();
            alert("Registration successful!");
            form.reset();
        } catch (error) {
            alert("Registration failed: " + error);
        }
    };
    
  return (
    <form className='register-form' onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="text" name="name" />
        Username
      </label><br/>
      <label>
        <input type="email" name="email" />
        Email
      </label><br/>
      <label>
        <input type="password" name="password" />
        Password
      </label><br/>
      <button type="submit">Register</button>
    </form>
  );
};