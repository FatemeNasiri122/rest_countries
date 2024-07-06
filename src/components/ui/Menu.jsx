import { useState } from 'react'
import Button from './Button'

const Menu = ({ title, items, }) => {
    const [open, setOpen] = useState(false);

    const handleItemClick = (item) => {
        setOpen(false);
        item?.handleClick();
    }

    return (
        <div className="relative">
            <Button
                type="button"
                customStyle={"w-32"}
                onClick={() => setOpen(prev => !prev)}>
                {title}
            </Button>
            {open && <ul className="w-full absolute rounded mt-2 dark:bg-dark-color bg-white-color shadow-cart dark:shadow-dark-cart z-10">
                {items.map(item => <li key={item.id}
                    className="flex items-center p-4 cursor-pointer text-sm"
                    onClick={() => handleItemClick(item)}>
                    {item.icon}
                    <span className={`${item.icon && "ml-2"}`}>{item.title}</span>
                </li>)}
            </ul>}
        </div>
    )
}

export default Menu