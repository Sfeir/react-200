import React, { PropTypes } from 'react';

const Input = ({placeholder, ...props}) => (
  <div className="input-field">
    <input {...props} />
    <label
      htmlFor={props.id}
      className={props.value ? 'active' : null}>{placeholder}</label>
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default Input;