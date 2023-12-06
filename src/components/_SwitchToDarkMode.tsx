import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
export interface SwitchDarkModeProps {
    className?: string;
}
const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({ className = "" }) => {
    const { isDark: isDarkMode, setIsDark: setIsDarkMode } = useContext(ThemeContext);
    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            toDark();
        } else {
            toLight();
        }
    }, []);

    const toDark = () => {
        setIsDarkMode(true);
        const root = document.querySelector("html");
        if (!root) return;
        !root.classList.contains("dark") && root.classList.add("dark");
        localStorage.theme = "dark";
    };

    const toLight = () => {
        setIsDarkMode(false);
        const root = document.querySelector("html");
        if (!root) return;
        root.classList.remove("dark");
        localStorage.theme = "light";
    };

    const _toogleDarkMode = () => {
        if (localStorage.theme === "light") {
            toDark();
        } else {
            toLight();
        }
    }

    return (
        <button
            onClick={_toogleDarkMode}
            className={`btn btn-dark rounded-circle  ${className}`}
        >
            {isDarkMode ? (
                <div className="w-7 h-7" aria-hidden="true">
                    <IoMdMoon />
                </div>
            ) : (
                <div className="w-7 h-7" aria-hidden="true">

                    <IoMdSunny />
                </div>

            )}
        </button>
    );
};

export default SwitchDarkMode;
