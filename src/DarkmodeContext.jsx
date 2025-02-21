import React, { createContext, useState } from 'react';

export const DarkmodeContext = createContext();

export const DarkmodeProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleDarkMode = () => {
        let element = document.body;
        element.classList.toggle("dark");
        setIsClicked(isClicked => !isClicked);
    };

    return (
        <DarkmodeContext.Provider value={{ isClicked, toggleDarkMode }}>
            {children}
        </DarkmodeContext.Provider>
    );
};