import { Field} from "formik";
import React from 'react'
import FormikAutocomplete from './../components/FormikAutocomplete';
import { DIVISIONES } from './../constants';


function Instrucciones() {

  return (
    <div>
      <h1>Encuesta de salarios de la CDMX</h1>
      <b>Las respuestas de esta encuesta no serán compartidas con tu jefe y/o compañeros de trabajo.</b>
      <p></p>
      <p>Tienes 1 minutos para responde cada pregunta. Comienza indicando tu área de trabajo</p>
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
