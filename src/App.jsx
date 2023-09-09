import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import { Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

import NewEntry from "./pages/NewEntryPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserProfilePage from "./pages/UserProfilePage";

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
          <Route path="/users/:id" element={<UserProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </IntlProvider>
  );
}

export default App;
