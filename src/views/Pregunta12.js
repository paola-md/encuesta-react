import React from 'react'
import {  Field} from "formik";
import  RadioBinary from './../components/RadioBinary';


function Pregunta12() {
  return (
    <div>
      <h2>Pregunta 12</h2>

      <p> ¿Le parece incómodo preguntar información salarial a sus compañeros?</p>
      <Field name='p12_bin1' component={RadioBinary}/>

      <p> ¿Si le realiza una pregunta sobre su salario a un compañera/o esperaría que este/a la responda?</p>
      <Field name='p12_bin2' component={RadioBinary}/>

      <p> ¿Es aceptable socialmente preguntarle a alguien sobre su salario?</p>
      <Field name='p12_bin3' component={RadioBinary}/>


    </div>

  )
}

export default Pregunta12
