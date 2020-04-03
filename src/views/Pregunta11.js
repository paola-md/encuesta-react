import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import { Field} from "formik";
import  ProbSlider from './../components/ProbSlider';


function Pregunta11() {
  const { values } = useFormikWizard();
  const base = values.preg10.salary_p10;
  const menos_10 = Math.round(base*0.9);
  const mas_10 = Math.round(base*1.1);
 return (
    <div>
      <h2>Pregunta 11</h2>

      <p>En la pregunta anterior, reportaste que crees que el salario mensual promedio para marzo de 2019 para los empleados con un cargo similar al tuyo fue de {base} MXN.</p>
      <p>La siguiente pregunta está diseñada para evaluar qué tan seguro te sientes acerca de tu respuesta anterior ¿Con cuál probabilidad crees que el salario promedio verdadero caiga dentro de las siguientes categorías?</p>
      <p></p>

      <b>Menos de {menos_10} </b>
      <Field name='prob_p11_menos' component={ProbSlider}/>
      <p></p><p></p>


      <b>Mas de {mas_10} </b>
      <Field name='prob_p11_mas'  component={ProbSlider}/>
      <p></p><p></p>


    </div>

  )
}

export default Pregunta11
