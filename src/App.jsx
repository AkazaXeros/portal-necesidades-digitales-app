import './App.css';

import NewEntry from './components/Entries/NewEntry';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <>
      <Register />
      <Login />
      <NewEntry />
    </>
  );
}

export default App;
