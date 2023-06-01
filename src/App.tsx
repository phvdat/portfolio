import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './style/theme-variables';
import './App.css';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
