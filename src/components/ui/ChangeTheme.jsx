import useTheme from "../hooks/useTheme"
import Menu from "./Menu"
import Theme from "./icons/Theme";

const ChangeTheme = () => {
    const [theme, handleChange] = useTheme();
    return (
        <div>
            <Menu title={<span className="flex" >
                <Theme />
                <span className="ml-2 text-black dark:text-white-color text-sm">{theme}</span>
            </span>} items={[
                { id: 0, title: "dark", handleClick: () => { handleChange("dark") } },
                { id: 2, title: "light", handleClick: () => { handleChange("light") } },
                { id: 3, title: "system", handleClick: () => { handleChange("system") } },
            ]} />
        </div>
    )
}

export default ChangeTheme