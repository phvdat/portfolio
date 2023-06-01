/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { darkModeButtonStyle } from './DarkModeButtonStyle';

type ThemeMode = 'dark' | 'light';

const DarkModeButton = () => {
  const body = document.getElementsByTagName('body')[0];

  const [darkMode, setDarkMode] = useState<ThemeMode>(
    (localStorage.getItem('theme') as ThemeMode) || 'light'
  );

  const handleDarkMode = (mode: boolean) => {
    body.style.transition = 'background-color 0.3s linear';
    if (mode) {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode('dark');
    } else {
      body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setDarkMode('light');
    }
  };

  useEffect(() => {
    body.setAttribute('data-theme', darkMode);
  }, [darkMode, body]);

  return (
    <div css={darkModeButtonStyle.self}>
      <input
        checked={darkMode === 'dark'}
        type='checkbox'
        id='toggle-button'
        onChange={(event) => handleDarkMode(event.target.checked)}
      />
      <label htmlFor='toggle-button' css={darkModeButtonStyle.wrapper}>
        <div css={darkModeButtonStyle.ball} className='switch-ball'>
          {darkMode === 'dark' ? (
            <MdDarkMode color='black' />
          ) : (
            <MdLightMode color='white' />
          )}
        </div>
      </label>
    </div>
  );
};

export default DarkModeButton;
