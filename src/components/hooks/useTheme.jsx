import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("");
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const getStoredTheme = localStorage.getItem("theme");
    const root = window.document.documentElement;

    const handleChange = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
        switch (theme) {
            case "dark":
                root.classList.add("dark");
                break;
            case "light":
                root.classList.remove("dark");
                break;
            case "system":
                localStorage.removeItem("theme");
                break;
            default:
                localStorage.removeItem("theme");
        }
    }

    const handleChangePreference = (event) => {
        if (!getStoredTheme) {
            setTheme(event.matches ? "dark" : "light");
            if (preference.matches) {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark")
            }
        }

    }

    useEffect(() => {
        if (getStoredTheme) {
            setTheme(getStoredTheme);
            theme === "dark" && root.classList.add(getStoredTheme);
            return;
        }
        setTheme("system");
        if (preference.matches) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark")
        }

        preference.addEventListener("change", handleChangePreference);

        return () => {
            preference.removeEventListener("change", handleChangePreference)
        }

    }, [preference]);

    return [theme, handleChange];
}

export default useTheme;