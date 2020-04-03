import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import  MoneySlider from './../components/MoneySlider';
import { Formik, Form, Field,FastField, useFormikContext } from "formik";



function Pregunta4() {
  const { values } = useFormikWizard()

  return (
    <div>
      <h2>Pregunta 4</h2>

     <p>Ahora, supón que tienes la posibilidad de comprar la siguiente información: el salario promedio de 2 de sus compañeros.</p>
     <p></p>
     <p>Adicionalmente, si compras esta información, podrías usarla para modificar el salario promedio que calculaste en la pregunta anterior. Esto implica que, al mejorar tu predicción, tendrás mayor probabilidad de ganar el premio de <b>1000 MXN</b></p>
     <p></p>
     <p>Dado lo anterior, <b>¿Cuál es la máxima cantidad que estarías dispuesto a pagar por esta información?</b></p>
     <p></p>

     <Field name='pago_p4' component={MoneySlider}/>
     <p></p><p></p>
     <p><b>Nota: </b>Recuerda que estás haciendo la oferta a una computadora, así que conviene responder con sinceridad.</p>



    </div>

  )
}

export default Pregunta4
