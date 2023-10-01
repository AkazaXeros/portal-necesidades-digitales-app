// Importing components from React.
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Importing custom hooks component.
import { UserProvider } from './context/UserContext.jsx';

// Importing CSS.
import './index.css';

// Importing components from Material UI.
import Theme from './Colors/Colors';
import { ThemeProvider } from '@mui/material';
import { FilterProvider } from './context/FilterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <FilterProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </FilterProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
