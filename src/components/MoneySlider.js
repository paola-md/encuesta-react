import React from 'react';
import { TextField, Slider,Typography } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    justifyContent:'center',
    alignItems:'center',
    padding: "0px 0px 0px 100px"
  },
}));


const marks = [
  {
    value: 0,
    label: '0 MXN',
  },
  {
    value: 500,
    label: '500 MXN',
  },
  {
    value: 1000,
    label: '1,000 MXN',
  },
];

function valuetext(value) {
  return `${value} MXN`;
}

const MoneySlider = ({ textFieldProps, ...props }) => {
  const classes = useStyles();
  const { form: { setTouched, setFieldValue } } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <div className={classes.root}>
      <Slider
        {...props}
        {...field}
        defaultValue={500}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={50}
        min = {0}
        max = {1000}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={ (_, value) => setFieldValue(name, value) }
        onBlur={ () => setTouched({ [name]: true }) }
      />
     </div>
  );
}



export default  MoneySlider;
