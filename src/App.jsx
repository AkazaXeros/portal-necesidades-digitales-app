// Importing components from React.
import { Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

// Importing custom components.
import EditPasswordPage from './pages/EditPasswordPage';
import EntryPage from './pages/EntryPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import Login from './components/Login/Login';
import NewEntry from './pages/NewEntryPage';
import NewComment from './components/Comments/NewComment';
import NotFoundPage from './pages/NotFoundPage';
import Register from './components/Register/Register';
import UserProfilePage from './pages/UserProfilePage';
import UpdateEntry from './components/Forms/UpdateEntry';
import ServicesPage from './pages/ServicesPage';
import About from './components/About/About';

// Importing CSS.
import './App.css';
function App() {
  return (
    <IntlProvider locale="en">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/:id/:userName" element={<UserProfilePage />} />
          <Route path="/users/updateEntry" element={<UpdateEntry />} />
          <Route path="/users/password" element={<EditPasswordPage />} />
          <Route path="/entries" element={<NewEntry />} />
          <Route path="/entries/:id/:title" element={<EntryPage />} />
          <Route path="/allEntries" element={<ServicesPage />} />
          <Route path="/comments/:entryId/:title" element={<NewComment />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </IntlProvider>
  );
}

export default App;
