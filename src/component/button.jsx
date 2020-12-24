/* eslint-disable no-useless-concat */
import React from "react";

const button = (props) => {
    console.log("hi")
    const { buttonText, onClick, type, className, isDisabled } = props
    return (
        <button
            type={type}
            className={[className]}
            disabled={isDisabled}
            onClick={onClick}>
            {buttonText}
        </button>
    );
};
export default button;
