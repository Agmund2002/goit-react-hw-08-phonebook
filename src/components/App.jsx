import { lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const AddContactPage = lazy(() => import('pages/AddContactPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='new' element={<AddContactPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
