import React from 'react';
import { fieldToTextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent:'center',
    alignItems:'center',
  },
  margin: {
    height: theme.spacing(1),
    width: theme.spacing(1),
  },
}));



const RadioBinary = ({ textFieldProps, ...props }) => {
  const classes = useStyles();
  const { form: { setTouched, setFieldValue } } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <div className={classes.root}>

      <FormControl component="fieldset">
     <RadioGroup
     row
        {...props}
        {...field}
        aria-label="gender"
        onChange={ (_, value) => setFieldValue(name, value) }
        onBlur={ () => setTouched({ [name]: true }) }
      >
      <FormControlLabel value="si" control={<Radio />} label="Sí" />
      <FormControlLabel value="no" control={<Radio />} label="No" />

  </RadioGroup>
  </FormControl>
    </div>
  );
}



export default RadioBinary;
