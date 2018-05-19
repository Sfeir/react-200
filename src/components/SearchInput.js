import React from 'react';
import * as PropTypes from 'prop-types';
import './SearchInput.css';

const SearchInput = ({ id, label, ...inputProps }) => (
  <div className="SearchInput input-field">
    <i className="material-icons prefix">search</i>
    <input id={id} type="text" {...inputProps} />
    <label htmlFor={id} className={inputProps.value ? 'active' : null}>
      {label}
    </label>
  </div>
);

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};

export default SearchInput;
