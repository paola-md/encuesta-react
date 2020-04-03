import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import  ProbSlider from './../components/ProbSlider';
import { Formik, Form, Field,FastField, useFormikContext } from "formik";



function Pregunta06() {
  const { values } = useFormikWizard()

  return (
    <div>
      <h2>Pregunta 6</h2>

      <p>Retomando el primer juego, ingresaste un pronóstico del salario mensual promedio de tus compañeros de trabajo. Si ésta predicción no se aleja más del 5% del valor real, recibirás una recompensa de 200 MXN </p>
      <p><b>¿Cuál crees que es la probabilidad de que pronostiques el salario promedio sin desviarte más del 5% de su valor verdadero (es decir, de ganar)?</b></p>
      <p></p>
      <p></p>

     <Field name='prob_p6' component={ProbSlider}/>
     <p></p><p></p>


    </div>

  )
}

export default Pregunta06
