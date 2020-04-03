import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import  ProbSlider from './../components/ProbSlider';
import { Formik, Form, Field,FastField, useFormikContext } from "formik";



function Pregunta7() {
  const { values } = useFormikWizard()

  return (
    <div>
      <h2>Pregunta 7</h2>

      <p>Dado que esperas ganar 1000 MXN con una probabilidad de {values.pregunta6.prob_p6}%, tu premio en valor esperado es de XX MXN.</p>
      <p>
      <p>Ahora te queremos ofrecer una cantidad fija de dinero para dejar de jugar este juego. Hacemos esto con todos los participantes, sin importar su predicción sobre el salario promedio de sus compañeros</p>
      <p>
      <p><b>¿Cuál es la cantidad mínima que aceptarías para dejar de jugar este juego de predicción?  Recuerda que estás haciendo la oferta a una computadora, así que conviene responder con sinceridad.</b></p>
      <p>

     <Field name='pago_p6' component={ProbSlider}/>
     <p></p><p></p>


    </div>

  )
}

export default Pregunta7
