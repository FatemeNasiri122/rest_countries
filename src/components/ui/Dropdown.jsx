import { useState } from "react";
import Arrow from "./icons/Arrow";

const Dropdown = ({ id, label, placeholder, options, hasError, error }) => {
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    const select = (op) => {
        setSelected(op.option);
        setOpen(false);
        op.action();
    }

    return (<div className="flex flex-col ">
        <label className="block dark:text-color-body text-color-light-body mb-2">{label}</label>
        <div className="relative">
            <button type="button"
                className={`w-full flex justify-between rounded bg-white-color dark:bg-dark-color px-4 py-3 items-center shadow-cart
            dark:shadow-none placeholder-gray border border-transparent text-black dark:text-white-color ${hasError && "border-red-500"}`}
                onClick={() => setOpen(prev => !prev)}
            >
                <span>{selected ? selected : placeholder || "please select"}</span>
                <span className={`${open ? "rotate-180" : "rotate-0"}`}>
                    <Arrow />
                </span>
            </button>
            {/* {open} */}
            {open && <ul className={`w-full absolute  mt-2 dark:bg-dark-color bg-white-color rounded shadow-cart dark:shadow-none`}>
                {options?.map(op => <li
                    key={op.id}
                    className="px-4 py-2 text-black dark:text-white-color cursor-pointer"
                    onClick={() => select(op)}
                >
                    {op.option}
                </li>)}
            </ul>}
        </div>
        <small className="error-text">{error}</small>
    </div>)
}

export default Dropdown;