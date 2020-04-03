import React from 'react'
import  MoneySlider from './../components/MoneySlider';
import { Field } from "formik";



function Pregunta09() {

  return (
    <div>
      <h2>Pregunta 9</h2>

      <p>Ahora, imagina que te da una semana adicional para revisar tu pronóstico, y la puedes usar para buscar información adicional e incrementar la precisión de dicha predicción.</p>
       <p></p>
       <p>Ahora, con una semana adicional, ¿Cuánto deberíamos pagarte para que renunciaras a jugar el juego?</p>
       <p></p>

     <Field name='pago_p9' component={MoneySlider}/>
     <p></p><p></p>

    </div>

  )
}

export default Pregunta09
