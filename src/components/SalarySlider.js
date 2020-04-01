import React from 'react';
import { TextField, Slider,Typography } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 100,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: 'Salario Minimo',
  },
  {
    value: 20,
    label: '20 MXN',
  },
  {
    value: 37,
    label: '37 MXN',
  },
  {
    value: 100,
    label: 'Salario Presidente',
  },
];

function valuetext(value) {
  return `${value} MXN`;
}

const SalarySlider = ({ textFieldProps, ...props }) => {
  const classes = useStyles();
  const { form: { setTouched, setFieldValue } } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <Slider
      {...props}
      {...field}
      defaultValue={20}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-custom"
      step={10}
      valueLabelDisplay="auto"
      marks={marks}
      onChange={ (_, value) => setFieldValue(name, value) }
      onBlur={ () => setTouched({ [name]: true }) }
    />
  );
}



export default SalarySlider;
