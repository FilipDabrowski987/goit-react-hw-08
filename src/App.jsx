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