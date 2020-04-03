import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import  ProbSlider from './../components/ProbSlider';
import { Field } from "formik";



function Pregunta08() {
  const { values } = useFormikWizard();

  return (
    <div>
      <h2>Pregunta 8</h2>

      <p>Algunos participantes serán seleccionados al azar para revisar sus predicciones, y si es necesario, cambiarlas.</p>
      <p>Imagina que tienes esa semana adicional. Puedes usar esta semana adicional para buscar información e incrementar la precisión de su predicción. Por ejemplo, podrías usar este tiempo para preguntar a algunos de tus compañeros sobre sus salarios. Recuerda que, sin esa semana adicional, esperas ganar el juego con una probabilidad de {values.preg6.prob_p6} %.</p>
      <p></p>
      <p><b>Si tienes esa semana adicional ¿Cuál es la nueva probabilidad de que gane ese juego (tener una predicción no más lejana del 5% del valor real)?</b></p>
      <p></p>

     <Field name='prob_p8' component={ProbSlider}/>
     <p></p><p></p>

    </div>

  )
}

export default Pregunta08
