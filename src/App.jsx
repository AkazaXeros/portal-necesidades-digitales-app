// Importing components from React
import { Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

// Importing CSS
import "./App.css";

// Importing components
import AllEntries from "./components/Entries/AllEntries";
import EditPasswordPage from "./pages/EditPasswordPage";
import EntryPage from "./pages/EntryPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Login from "./components/Login/Login";
import NewEntry from "./pages/NewEntryPage";
import NewComment from "./components/Comments/NewComment";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./components/Register/Register";
import UserProfilePage from "./pages/UserProfilePage";
import UpdateEntry from "./components/Forms/UpdateEntry";

function App() {
  return (
    <IntlProvider locale="en">
      <Header />
      <main>
        <Routes>
          <Route path="/entries/allEntries" element={<AllEntries />} />
          <Route path="/users/password" element={<EditPasswordPage />} />
          <Route path="/entries/:id/:title" element={<EntryPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/comments/:entryId" element={<NewComment />} />
          <Route path="/entries" element={<NewEntry />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/updateEntry" element={<UpdateEntry />} />
          <Route path="/users/:id/:userName" element={<UserProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </IntlProvider>
  );
}

export default App;
