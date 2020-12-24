import React from "react";

const checkbox = (props) => {
    const { onChange, label, name, id, type, checked, parentClassName, onBlur, disabled } = props;

    const handleChange = (event) => {
        onChange(event.target.checked)
    }
    return (
        <div className={[parentClassName]}>
            <input
                type={type}
                className=""
                id={id}
                name={name}
                checked={checked || false}
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
                disabled={disabled} />
            <label className="" for={id}>{label}</label>
        </div>
    );
};

export default checkbox;