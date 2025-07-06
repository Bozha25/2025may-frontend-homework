import React, { useState, useEffect } from 'react';
import bgDark from '../assets/bg-login-dark.jpg';
import bgLight from '../assets/bg-login-light.jpg';
import './ThemeToggle.css'; 

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const root = document.documentElement;
        const container = document.querySelector('.container');

        theme === 'dark'
            ? root.classList.add('dark')
            : root.classList.remove('dark');
        localStorage.setItem('theme', theme);
        
        container.style.backgroundImage = `url(${theme === 'dark' ? bgDark : bgLight})`
        
    }, [theme]);

    return (
        <div className="theme-toggle">
            <input
                type="checkbox"
                id="theme-checkbox"
                checked={theme === 'dark'}
                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            <label htmlFor="theme-checkbox" className="toggle-label">
                <span className="icon-container sun-icon" />
                <span className="icon-container moon-icon" />
                <span className="toggle-ball" />
            </label>
        </div>

    );
}

export default ThemeToggle;