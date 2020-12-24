import React from "react";

const input = (props) => {
    const { onChange, showError, error, type, name, id, disabled, onBlur, value, placeholder, className } = props

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
            <input
                type={type}
                name={name}
                id={id}
                className={[className]}
                value={value}
                disabled={disabled}
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
                placeholder={placeholder}
            />

            {showError && <div className="formError">{error}</div>}
        </>
    );
};

export default input;