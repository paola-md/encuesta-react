import React from 'react'
import { FastField, useFormikContext } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

function Pregunta10() {
  const { errors, touched } = useFormikContext()
  const classes = useStyles();

  return (
    <div>
      <h2>Pregunta 10</h2>

      <p>¿Cuál crees que es el salario mensual promedio de todos tus compañeros en una posición similar a la tuya en el mes de febrero de 2020?</p>
      <p></p>
      <div align= "center">
      <div className={classes.root} >
        <b>Salario mensual promedio</b>
        <p></p>
        <FastField name="salary_p10" id="salary_p10" variant="outlined" />
      </div>

      </div>

    </div>

  )
}

export default Pregunta10
