import React, {createContext, FC, useEffect, useState} from 'react';

export const ThemeContext = createContext({
    theme: false,
    toggleTheme: () => {
    }
});

interface IThemeProvider {
    children: JSX.Element;
}

export const ThemeProvider:FC<IThemeProvider> = ({children}) => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
    }

    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme);
        document.body.classList.toggle('light-theme', !theme);
    });

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}