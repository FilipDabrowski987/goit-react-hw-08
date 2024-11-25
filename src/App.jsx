import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayot';
import './App.css';


function App() {

  const HomePage = lazy(() => import('./pages/HomePage'));
  const ContactsPage = lazy(() => import('./pages/ContactsPage'));
  const LoginPage = lazy(() => import('./pages/LoginPage'));
  const RegisterPage = lazy(() => import('./pages/RegisterPage'));

  return (
    <div>
      <SharedLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
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