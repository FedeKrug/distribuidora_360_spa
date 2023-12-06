import { createContext, useState } from "react";

type IThemeContext = {
    isDark: boolean;
    setIsDark: (val: boolean) => void;
}
type ThemeProviderType = {
    children: JSX.Element;
}

const defaultThemeContext: IThemeContext = {
    isDark: false,
    setIsDark: () => { }
}

export const ThemeContext = createContext(defaultThemeContext);


export const ThemeProvider = ({ children }: ThemeProviderType) => {
    const [isDark, setIsDark] = useState(false);


    const value: IThemeContext = {
        isDark,
        setIsDark
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}