
const Input = ({ label, id, isDisable, type, placeholder, hasError, defaultValue, errorMessage, leftIcon, rightIcon, clickableIcon, onchange, handleClick, value }) => {

    return (
        <div>
            <label htmlFor={id} className="block dark:text-white-color text-black mb-2">{label}</label>
            <div className={`w-full rounded bg-white-color dark:bg-dark-color px-4 py-3 flex items-center shadow-cart
            dark:shadow-none placeholder-gray border border-transparent text-black dark:text-white-color ${hasError && "border-red-500"} `}>
                <span className='mr-2'>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{leftIcon}</button> : leftIcon}
                </span>
                <input
                    id={id}
                    type={type}
                    disabled={isDisable}
                    placeholder={placeholder}
                    className="w-full border-none outline-none bg-transparent"
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onchange}
                />
                <span className='mr-2'>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{rightIcon}</button> : rightIcon}
                </span>
            </div>
            <small className="error-text">{errorMessage}</small>
        </div>
    );
}

export default Input;