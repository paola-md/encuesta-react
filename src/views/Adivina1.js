import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import SalarySlider from './../components/SalarySlider';
import { Formik, Form, Field,FastField, useFormikContext } from "formik";

function Adivina1() {
  const { values } = useFormikWizard()

  return (
    <div>
      <h2>Pregunta 2</h2>
      <p></p>
      <p>En este ejercicio tendremos las siguientes reglas: Si tu predicción promedio del salario no se desvía más del 5% del valor real recibirás un premio monetario.</p>
      <p>Tus 5 compañeros también realizarán ejercicio, y quien obtenga la mejor predicción promedio del salario, tendrá un premio monetario de <b>1000 MXN</b>.</p>
      <p></p>
      <p>En promedio ¿Cuánto cree que ganaron sus 5 compañeros más cercanos y su jefe en marzo de 2019?</p>
      <p></p>
      <div>
      <b>Jefe: {values.personasCercanas.nom_jefe} </b>
      <Field name='salary_jefe' component={SalarySlider} label="Salary"/>
      <p></p>
      <b>Persona 1: {values.personasCercanas.nom_p1} </b>
      <Field name='salary_p1' component={SalarySlider} label="Salary"/>
      <p></p>
      <b>Persona 2: {values.personasCercanas.nom_p2} </b>
      <Field name='salary_p1' component={SalarySlider} label="Salary"/>
      <p></p>
      <b>Persona 3: {values.personasCercanas.nom_p3} </b>
      <Field name='salary_p1' component={SalarySlider} label="Salary"/>
      <p></p>
      <b>Persona 4: {values.personasCercanas.nom_p4} </b>
      <Field name='salary_p1' component={SalarySlider} label="Salary"/>
      <p></p>
      <b>Persona 5: {values.personasCercanas.nom_p5} </b>
      <Field name='salary_p1' component={SalarySlider} label="Salary"/>
      <p></p>
      </div>
    </div>

  )
}

export default Adivina1
