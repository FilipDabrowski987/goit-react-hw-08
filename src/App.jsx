import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { Contacts } from './pages/ContactsPage';
import { Login } from './pages/LoginPage';
import { Register } from './pages/RegisterPage';
import './App.css';
import { SharedLayout } from './components/SharedLayot';

function App() {

  return (
    <div>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/operations";
// import ContactForm from './components/ContactForm/ContactForm.jsx';
// import SearchBox from './components/SearchBox/SearchBox.jsx';
// import ContactList from './components/ContactList/ContactList.jsx';
// import './App.css'

// function App() {

//   const dispatch = useDispatch();
//   const { isLoading, error } = useSelector((state) => state.contacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <ContactList />
//     </div>
//   );
// }

// export default App;