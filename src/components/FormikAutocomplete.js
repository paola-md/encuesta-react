import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';

function validateEntry(value) {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}


const FormikAutocomplete = ({ textFieldProps, ...props }) => {

  const { form: { setTouched, setFieldValue } } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <div>
    <Autocomplete
      freeSolo
      {...props}
      {...field}
      onChange={ (_, value) => setFieldValue(name, value) }
      onBlur={ () => setTouched({ [name]: true }) }
      renderInput={ props => (
        <TextField {...props} {...textFieldProps} helperText={helperText} error={error} />
      )}
    />
    </div>
  );
}

export default FormikAutocomplete;
