import { useFormikWizard } from 'formik-wizard'
import React from 'react'

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
      <b>Jefe {values.personasCercanas.nom_jefe} </b>
      </div>
    </div>


  )
}

export default Adivina1
