import React from 'react';
import {  Slider } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    justifyContent:'center',
    alignItems:'center',
    padding: "0px 0px 0px 0px",
    textAlign: "center",
  },
}));


const marks = [
  {
    value: 5,
    label: '5,000 MXN',
  },
  {
    value: 105,
    label: '105,000 MXN',
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
    <div  align="center">
    <div className={classes.root}>
      <Slider
        {...props}
        {...field}
        defaultValue={10}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        min = {5}
        max = {105}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={ (_, value) => setFieldValue(name, value) }
        onBlur={ () => setTouched({ [name]: true }) }
      />
     </div>
     <small >Salario en miles de pesos Mexicanos</small>
      </div>
  );
}



export default SalarySlider;
