import { Link } from "react-router-dom"

const Button = ({ children, isDisable, type, href, leftIcon, rightIcon, onClick }) => {
    return (
        <>
            {href ?
                <Link to={href}
                    className={`border-none outline-none bg-transparent cursor-pointer bg-white-color dark:bg-dark-color text-black dark:text-white-color flex items-center px-4 py-3 rounded-md shadow-cart dark:shadow-dark-cart`}
                >
                    <span className='mr-2'>{leftIcon}</span>
                    {children}
                    <span className='ml-2'>{rightIcon}</span>
                </Link>
                :
                <button
                    className={`border-none outline-none bg-transparent cursor-pointer bg-white-color dark:bg-dark-color text-black dark:text-white-color flex items-center px-4 py-3 rounded-md shadow-cart dark:shadow-dark-cart ${isDisable && "text-gray"}`}
                    onClick={onClick}
                    type={type}
                    disabled={isDisable}
                >
                    <span className='mr-2'>{leftIcon}</span>
                    {children}
                    <span className='ml-2'>{rightIcon}</span>
                </button>
            }
        </>
    )
}

export default Button