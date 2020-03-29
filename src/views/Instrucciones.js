import { FastField, useFormikContext } from 'formik'
import React from 'react'

function Instrucciones() {
  const { errors, touched } = useFormikContext()

  return (
    <div>
      <h1>Encuesta de salarios de la CDMX</h1>
      <b>Las respuestas de esta encuesta no serán compartidas con tu jefe y/o compañeros de trabajo.</b>
      <p></p>
      <p>Tienes 3 minutos para responder estas pregunta. Comienza indicando tu área de trabajo</p>
      <p></p>
      <div>
        <label htmlFor="area">División o Unidad: </label>
        <FastField name="area" id="area" />
      </div>
      <small style={{ color: 'red' }}>
        {touched.area && errors.area}
      </small>
    </div>
  )
}

export default Instrucciones
