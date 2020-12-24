/* eslint-disable no-useless-concat */
import React from "react";

const dropDown = (props) => {
  const { onChange, options, error, value, showError, onBlur, disabled, placeholder, name, className } = props

  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div
      className={["input-group" + " " + className]}
    >
      <select
        className=''
        onBlur={onBlur}
        onChange={(e) => handleChange(e)}
        disabled={disabled === true ? true : false}
        name={name}
      >
        {placeholder ? <option value="" disabled selected={value === ''}>Select your option</option> : null}
        {options.map((data, key) => {
          return (
            <option value={data.value} selected={data.value === value ? true : false} key={key}>{data.label}</option>
          )
        })}
      </select>
      {showError && <div className="formError">{error}</div>}
    </div>
  );
};

export default dropDown;