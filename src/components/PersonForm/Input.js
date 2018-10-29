import React from 'react';
import { withFormsy } from 'formsy-react';
import RawInput from '../Input';

// adapt Input so it can be used with formsy-react

const withFormsyProps = FormControl => {
  return ({
    getValue,
    setValue,
    isFormDisabled,
    isValid,
    getErrorMessage,
    ...props
  }) => (
    <FormControl
      {...props}
      value={getValue()}
      onChange={e => setValue(e.target.value)}
      disabled={isFormDisabled()}
      isInvalid={!isValid()}
      errorMessage={getErrorMessage()}
    />
  );
};

const suppressRefWarning = Component => {
  return props => <Component {...props} innerRef={null} />;
};

// chain higher order components (withFormsyProps -> withFormsy -> suppressRefWarning)
export const Input = suppressRefWarning(withFormsy(withFormsyProps(RawInput)));
