import React from 'react';
import { TextField, Slider,Typography } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    justifyContent:'center',
    alignItems:'center',
  },
  margin: {
    height: theme.spacing(3),
    width: theme.spacing(10),
  },
}));


const marks = [
  {
    value: 0,
    label: 'Nada seguro',
  },
  {
    value: 100,
    label: 'Seguro',
  },
];

function valuetext(value) {
  return `${value} MXN`;
}

const ProbSlider = ({ textFieldProps, ...props }) => {
  const classes = useStyles();
  const { form: { setTouched, setFieldValue } } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
      Probabilidad
      </Typography>
      <Slider
        {...props}
        {...field}
        defaultValue={50}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        min = {0}
        max = {100}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={ (_, value) => setFieldValue(name, value) }
        onBlur={ () => setTouched({ [name]: true }) }
      />
     </div>
  );
}



export default ProbSlider;
