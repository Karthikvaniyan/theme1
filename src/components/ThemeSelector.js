import React, { useState } from 'react';
import './ThemeSelector.css';

function ThemeSelector() {
    const [theme, setTheme] = useState('light');
    const [paragraphText, setParagraphText] = useState('This is a light-themed paragraph.');

    const handleThemeChange = (e) => {
        const selectedTheme = e.target.value;
        setTheme(selectedTheme);

        
        if (selectedTheme === 'Karthik') {
            setParagraphText('I am Karthik.');
        } else if (selectedTheme === 'Darshan') {
            setParagraphText('I am Darshan.');
        } else if (selectedTheme === 'Chirag') {
            setParagraphText('I am Chirag.');
        } 

    };

    return (
        <div className="container">
            <h2>Theme Change</h2>
            <div className="theme-selector">
                <label htmlFor="theme-select">Theme: </label>
                <select id="theme-select" onChange={handleThemeChange}>
                    <option value="Karthik">Karthik</option>
                    <option value="Darshan">Darshan</option>
                    <option value="Chirag">Chirag</optinon>
                </select>
            </div>
            <div className={`paragraph-box ${theme}`}>
                <p>{paragraphText}</p>
            </div>
        </div>
    );
}

export default ThemeSelector;
