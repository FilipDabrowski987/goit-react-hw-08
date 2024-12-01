import { useDispatch } from "react-redux";
import { logIn } from "../redux/operations";
import './Navigation.css'

export function LoginForm() {
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.elements.email.value.trim();
        const password = form.elements.password.value.trim(); 
      
      if (!email || !password) {
        alert("Email and password are required.");
        return;
    }

    try {
        await dispatch(logIn({ email, password })).unwrap();
        form.reset();
    } catch (error) {
        alert("Login failed: " + error);
      }
    }

  return (
    <form className='login-form' onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="email" name="email" />
        Email
      </label><br/>
      <label>
        <input type="password" name="password" />
        Password
      </label><br/>
      <button type="submit">Login</button>
    </form>
  );
};