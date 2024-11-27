import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayot';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

function App() {

  const HomePage = lazy(() => import('./pages/HomePage'));
  const ContactsPage = lazy(() => import('./pages/ContactsPage'));
  const LoginPage = lazy(() => import('./pages/LoginPage'));
  const RegisterPage = lazy(() => import('./pages/RegisterPage'));

  return (
    <div>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<PrivateRoute redirectPath='/login' element={<ContactsPage/>}/>} />
          <Route path="/login" element={<RestrictedRoute redirectPath='/contacts' element={<LoginPage/>}/>} />
          <Route path="/register" element={<RestrictedRoute redirectPath='/contacts' element={<RegisterPage/>}/>} />
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