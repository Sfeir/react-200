import React from 'react';

const idForName = name => `person-form-${name}`;

const Input = ({
  name,
  type,
  label,
  value,
  onChange,
  disabled,
  isInvalid,
  errorMessage
}) => (
  <div className="input-field">
    <input
      id={idForName(name)}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={isInvalid ? 'invalid' : undefined}
      autoComplete="off"
    />
    <label htmlFor={idForName(name)} className={value ? 'active' : undefined}>
      {label}
    </label>
    <span className="helper-text" data-error={errorMessage} />
  </div>
);

export default Input;
