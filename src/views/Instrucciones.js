import { Formik, Form, Field,FastField, useFormikContext } from "formik";
import React from 'react'
import { Autocomplete } from "@material-ui/lab";
import { Grid, TextField } from "@material-ui/core";
import FormikAutocomplete from './../components/FormikAutocomplete';
import SalarySlider from './../components/SalarySlider';
import { useFormikWizard } from 'formik-wizard'
import { DIVISIONES } from './../constants';



function Instrucciones() {
  const { values } = useFormikWizard()

  return (
    <div>
      <h1>Encuesta de salarios de la CDMX</h1>
      <b>Las respuestas de esta encuesta no serán compartidas con tu jefe y/o compañeros de trabajo.</b>
      <p></p>
      <p>Tienes 3 minutos para responder estas preguntas. Comienza indicando tu área de trabajo</p>
      <p></p>

      <div>
        <Field name='area' component={FormikAutocomplete} label="División o unidad"
          options={DIVISIONES}
          textFieldProps={{ fullWidth: true, margin: 'normal', variant: 'outlined' }}
        />

      </div>


    </div>
  )
}

export default Instrucciones
