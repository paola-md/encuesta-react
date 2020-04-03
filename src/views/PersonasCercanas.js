import { Field } from "formik";
import React from 'react'
import { useFormikWizard } from 'formik-wizard'
import FormikAutocomplete from './../components/FormikAutocomplete';
import { DIVISIONES, TRABAJADORES  } from './../constants';

function PersonasCercanas() {

  const { values } = useFormikWizard()
  return (
    <div>
      <h2>Pregunta 1 {values.instruccion.salary} </h2>

      <p>Escribe el nombre de su jefe y las cinco personas con las que trabaja más de cerca y en qué división están (en caso de que la divisón no aparezca, por favor escribe su nombre) </p>

      <div>
      <b>Jefe</b>
      <Field name='nom_jefe' component={FormikAutocomplete}
        options={TRABAJADORES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"Nombre", variant: 'outlined' }}
      />
      <Field name='div_jefe' component={FormikAutocomplete} label="División"
        options={ DIVISIONES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"División", variant: 'outlined' }}
      />

      <b>Primera persona más cercana</b>
      <Field name='nom_p1' component={FormikAutocomplete}
        options={TRABAJADORES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"Nombre", variant: 'outlined' }}
      />
      <Field name='div_p1' component={FormikAutocomplete} label="División"
        options={ DIVISIONES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"División", variant: 'outlined' }}
      />

      <b>Segunda persona más cercana</b>
      <Field name='nom_p2' component={FormikAutocomplete}
        options={TRABAJADORES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"Nombre", variant: 'outlined' }}
      />
      <Field name='div_p2' component={FormikAutocomplete} label="División"
        options={ DIVISIONES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"División", variant: 'outlined' }}
      />

      <b>Tercera persona más cercana</b>
      <Field name='nom_p3' component={FormikAutocomplete}
        options={TRABAJADORES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"Nombre", variant: 'outlined' }}
      />
      <Field name='div_p3' component={FormikAutocomplete} label="División"
        options={ DIVISIONES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"División", variant: 'outlined' }}
      />

      <b>Cuarta persona más cercana</b>
      <Field name='nom_p4' component={FormikAutocomplete}
        options={TRABAJADORES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"Nombre", variant: 'outlined' }}
      />
      <Field name='div_p4' component={FormikAutocomplete} label="División"
        options={ DIVISIONES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"División", variant: 'outlined' }}
      />

      <b>Quinta persona más cercana</b>
      <Field name='nom_p5' component={FormikAutocomplete}
        options={TRABAJADORES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"Nombre", variant: 'outlined' }}
      />
      <Field name='div_p5' component={FormikAutocomplete} label="División"
        options={ DIVISIONES}
        textFieldProps={{ fullWidth: true, margin: 'normal', label:"División", variant: 'outlined' }}
      />



      </div>
      <p></p>



    </div>
  )
}

export default PersonasCercanas
