import React, { Component } from 'react';
import Formsy, { withFormsy } from 'formsy-react';
import { Prompt } from 'react-router-dom';
import Card from '../Card';
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
const Input = suppressRefWarning(withFormsy(withFormsyProps(RawInput)));

//------------------------------------------------

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      valid: true,
      dirty: false,
      title: `${props.person.firstname} ${props.person.lastname}`
    };
  }

  onSubmit = (model, reset) => {
    this.setState({ saving: true });
    this.props.submit(model).then(success => {
      if (success) {
        this.props.onDone();
      } else {
        this.setState({ saving: false });
        alert('could not update person :(');
        reset();
      }
    });
  };

  onFormValid = () => {
    this.setState({ valid: true });
  };

  onFormInvalid = () => {
    this.setState({ valid: false });
  };

  onChange = (model, isDirty) => {
    this.setState({
      title: `${model.firstname} ${model.lastname}`,
      dirty: isDirty
    });
  };

  render() {
    const { onDone, person } = this.props;
    const { saving, valid, title, dirty } = this.state;

    return (
      <Formsy
        disabled={saving}
        onValidSubmit={this.onSubmit}
        onValid={this.onFormValid}
        onInvalid={this.onFormInvalid}
        onChange={this.onChange}
      >
        <Card
          actions={[
            <button
              type="submit"
              className="btn btn-default"
              key="save"
              disabled={saving || !valid || !dirty}
            >
              save
            </button>,
            <a onClick={onDone} key="cancel">
              cancel
            </a>
          ]}
        >
          <Card.Title mainTitle={title} />
          <Input
            name="firstname"
            type="text"
            label="first name"
            value={person.firstname}
            required
          />
          <Input
            name="lastname"
            type="text"
            label="last name"
            value={person.lastname}
            required
          />
          <Input
            name="entity"
            type="text"
            label="entity"
            value={person.entity}
            required
          />
          <Input
            name="email"
            type="text"
            label="email"
            value={person.email}
            required
            validations="isEmail"
            validationError="please enter a valid email address"
          />
          <Input
            name="phone"
            type="text"
            label="phone"
            value={person.phone}
            required
            validations="isFrenchPhoneNumber"
            validationError="please enter a valid 10 digit french phone number"
          />
        </Card>
        <Prompt
          when={dirty}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
      </Formsy>
    );
  }
}

export default PersonForm;
