
import React, { useState, useEffect } from 'react';

const buttonStyle = {
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  outline: 'none',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  cursor: 'pointer'
}

const switchToggleStyle = {
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  position: 'relative',
  transition: 'all 0.5s ease',
  backgroundColor: '#ffc93c',
  transform: 'translateX(-2rem)',
  padding: '3px',
  color: 'white'
}

const darkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const lightIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const SwitchToggle = ({ isDarkmode, toggleTheme }) => {
    const [toggleStyle, setToggleStyle] = useState(switchToggleStyle);
  
    useEffect(() => {
      if (isDarkmode) {
        setToggleStyle({
          ...switchToggleStyle,
          backgroundColor: '#aaaaaa',
          transform: 'translateX(3rem)',
        });
      } else {
        setToggleStyle(switchToggleStyle);
      }
    }, [isDarkmode]);
  
    return (
      <div
        id="switch-toggle"
        style={toggleStyle}
        onClick={toggleTheme}
      >
        {isDarkmode ? darkIcon : lightIcon}
      </div>
    );
  }

  export default SwitchToggle;