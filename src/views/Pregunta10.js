import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import { FastField, useFormikContext } from "formik";



function Pregunta10() {
  const { values } = useFormikWizard();
  const { errors, touched } = useFormikContext()

  return (
    <div>
      <h2>Pregunta 10</h2>

      <p>¿Cuál crees que es el salario mensual promedio de todos tus compañeros en una posición similar a la tuya en el mes de febrero de 2020?</p>
      <p></p>

      <div>
        <label htmlFor="salary_p10">Salario mensual promedio: </label>
        <FastField name="salary_p10" id="salary_p10" />
      </div>
      <small style={{ color: 'red' }}>
        {touched.salary_p10 && errors.salary_p10}
      </small>

    </div>

  )
}

export default Pregunta10
