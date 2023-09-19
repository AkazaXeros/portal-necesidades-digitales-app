import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import { Router, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import EntryPage from './pages/EntryPage';
import Login from './components/Login/Login';
import NewEntry from './pages/NewEntryPage';
import NewComment from './components/Comments/NewComment';
import Register from './components/Register/Register';
import UserProfilePage from './pages/UserProfilePage';
import UpdateEntry from './components/Forms/UpdateEntry';

function App() {
  Router;
  return (
    <IntlProvider locale="en">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/entries" element={<NewEntry />} />
          <Route path="/entries/:id" element={<EntryPage />} />
          <Route path="/comments/:entryId" element={<NewComment />} />
          <Route path="/users/:id" element={<UserProfilePage />} />
          <Route path="/users/updateEntry" element={<UpdateEntry />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </IntlProvider>
  );
}

export default App;
