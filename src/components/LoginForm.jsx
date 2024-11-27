import { useDispatch } from "react-redux";
import { logIn } from "../redux/operations";

export function LoginForm() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { email, password } = form.elements;
        dispatch(
            logIn ({
                email: email.value,
                password: password.value,
            })
        );
        form.reset();
    }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};