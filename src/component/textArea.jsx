import React from "react";

const textArea = (props) => {
  const { showError, error, row, name, id, disabled, onBlur, value, placeholder, className } = props

  const handleChange = (event) => {
    const { onChange } = props;
    onChange(event.target.value)
  }

  return (
    <div>
      <textarea class="form-control"
        rows={row}
        name={name}
        id={id}
        className={[className]}
        value={value}
        disabled={disabled}
        onChange={(e) => handleChange(e)}
        onBlur={onBlur}
        placeholder={placeholder}>
      </textarea>
      {showError && <div className="formError">{error}</div>}
    </div>
  );
};

export default textArea;