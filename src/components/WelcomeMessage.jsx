import { useSelector } from 'react-redux';
import './UserNav.css'

const WelcomeMessage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className='welcome-message'>
      {isLoggedIn ? (
        <h2>
          Witaj w aplikacji Książka Telefoniczna. Przejdź do swoich kontaktów.
        </h2>
      ) : (
        <h2>
          Witaj w aplikacji Książka Telefoniczna. Zaloguj się.
        </h2>
      )}
    </div>
  );
};

export default WelcomeMessage;