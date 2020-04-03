import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import  MoneySlider from './../components/MoneySlider';
import { Formik, Form, Field,FastField, useFormikContext } from "formik";



function Pregunta05() {
  const { values } = useFormikWizard()

  return (
    <div>
      <h2>Pregunta 5</h2>

      <p>Antes de seguir con la encuesta, vamos a introducir un nuevo tipo de pregunta. Supongamos que estás jugando el siguiente juego: una moneda es lanzada, y debes adivinar si cae águila o sol. Si adivinas qué cara salió, ganas <b>1000 MXN</b>, de lo contrario, ganas <b>0 MXN</b>. Nota que el valor esperado de la ganancia de este juego es de <b>500 MXN</b>.</p>
      <p></p>
      <p>Dado lo anterior, <b>¿Cuál es la máxima cantidad que estarías dispuesto a pagar por esta información?</b> </p>
      <p></p>

     <Field name='pago_p5' component={MoneySlider}/>
     <p></p><p></p>
     <p><b>Nota: </b>Recuerda que estás haciendo la oferta a una computadora, así que conviene responder con sinceridad.</p>


    </div>

  )
}

export default Pregunta05
