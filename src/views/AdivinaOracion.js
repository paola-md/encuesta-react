import { useFormikWizard } from 'formik-wizard'
import React from 'react'
import SalarySlider from './../components/SalarySlider';
import RandomPhrases from './../components/RandomPhrases';
import { Formik, Form, Field,FastField, useFormikContext } from "formik";
import { RANDINT, FRASES } from './../constants';


function AdivinaOracion() {
  const { values } = useFormikWizard()


  return (
    <div>
      <h2>Pregunta 3</h2>

      <p></p>
      <p>En la pregunta anterior respondió cuánto cree que ganen sus compañeros. Ahora nos gustaría saber en promedio, </p>
      <b>{FRASES[RANDINT]}</b>
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

export default AdivinaOracion
