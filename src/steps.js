import { object, string, number, mixed } from 'yup'

import Instrucciones from './views/Instrucciones'
import PersonasCercanas from './views/PersonasCercanas'
import Adivina1 from './views/Adivina1'
import AdivinaOracion from './views/AdivinaOracion'
import Pregunta04 from  './views/Pregunta04'
import Pregunta05 from  './views/Pregunta05'
import Pregunta06 from  './views/Pregunta06'
import Pregunta07 from  './views/Pregunta07'
import Pregunta08 from  './views/Pregunta08'
import Pregunta09 from  './views/Pregunta09'
import Pregunta10 from  './views/Pregunta10'
import Pregunta11 from  './views/Pregunta11'
import Pregunta12 from  './views/Pregunta12'

import Summary from './views/Summary'


export default [
  {
    id: 'instruccion',
    component: Instrucciones,
    initialValues: {
      area: '',
    },
    validationSchema: object().shape({
      area: string().required(),
    })
  },
  {
    id: 'personasCercanas',
    component: PersonasCercanas,
    initialValues: {
      nom_jefe: '',
      div_jefe:'',
      nom_p1: '',
      div_p1:'',
      nom_p2: '',
      div_p2:'',
      nom_p3: '',
      div_p3:'',
      nom_p4: '',
      div_p4:'',
      nom_p5: '',
      div_p5:'',
    },
    validationSchema: object().shape({
      nom_jefe: string().required(),
      div_jefe: string().required(),
      nom_p1: string().required(),
      div_p1: string().required(),
      nom_p2: string().required(),
      div_p2: string().required(),
      nom_p3: string().required(),
      div_p3: string().required(),
      nom_p4: string().required(),
      div_p4: string().required(),
      nom_p5: string().required(),
      div_p5: string().required(),

    })
  },
  {
    id: 'adivina1',
    component: Adivina1,
    initialValues: {
      salary_jefe: '',
    },
  },
  {
    id: 'adivinaOracion',
    component: AdivinaOracion,
    initialValues: {
      frase: '',
    },
  },
  {
    id: 'preg4',
    component: Pregunta04,
    initialValues: {
      pago_p4: '',
    },
  },
  {
    id: 'preg5',
    component: Pregunta05,
    initialValues: {
      pago_p5: '',
    },
  },
  {
    id: 'preg6',
    component: Pregunta06,
    initialValues: {
      prob_p6: '',
    },
  },
  {
    id: 'preg7',
    component: Pregunta07,
    initialValues: {
      pago_p7: '',
    },
  },
  {
    id: 'preg8',
    component: Pregunta08,
    initialValues: {
      pago_p8: '',
    },
  },
  {
    id: 'preg9',
    component: Pregunta09,
    initialValues: {
      prob_p9: '',
    },
  },
  {
    id: 'preg10',
    component: Pregunta10,
    initialValues: {
      salary_p10: '',
    },
    validationSchema: object().shape({
      salary_p10: number().required().min(3000).max(105000),
    }),
  },
  {
    id: 'preg11',
    component: Pregunta11,
    initialValues: {
      prob_p11_menos: '',
      prob_p11_mas: ''
    },
    onAction: (sectionValues, formValues) => {
      if (sectionValues.prob_p11_menos + sectionValues.prob_p11_mas >100) {
        throw new Error('La suma de las probabilidades debe ser menor o igual a 100')
      }
    },
  },
  {
    id: 'preg12',
    component: Pregunta12,
    initialValues: {
      p12_bin1: '',
      p12_bin2: '',
      p12_bin3: ''
    },
    validationSchema: object().shape({
      p12_bin1: string().required(),
    }),
  },
  {
    id: 'summary',
    component: Summary,
    actionLabel: 'Finalizar',
  },
]
