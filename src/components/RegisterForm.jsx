import { useDispatch } from "react-redux";
import { register } from "../redux/operations";

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};