import { useDispatch } from "react-redux";

export function LoginForm() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()

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