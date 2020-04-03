import { object, string } from 'yup'

import Instrucciones from './views/Instrucciones'
import PersonasCercanas from './views/PersonasCercanas'
import Adivina1 from './views/Adivina1'
import AdivinaOracion from './views/AdivinaOracion'
import Pregunta4 from  './views/Pregunta4'
import Pregunta5 from  './views/Pregunta5'

import CompanyInfo from './views/CompanyInfo'
import PersonalInfo from './views/PersonalInfo'
import Summary from './views/Summary'


export default [
  {
    id: 'instruccion',
    component: Instrucciones,
    initialValues: {
      area: '',
      salary:'',
    },
  },
  {
    id: 'personasCercanas',
    component: PersonasCercanas,
    initialValues: {
      nom_jefe: '',
      jefe_div:'',
      per1:'',
      per1_div:''
    },
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
    component: Pregunta4,
    initialValues: {
      pago_p4: '',
    },
  },
  {
    id: 'preg5',
    component: Pregunta5,
    initialValues: {
      pago_p5: '',
    },
  },
  {
    id: 'personal',
    component: PersonalInfo,
    initialValues: {
      userName: '',
    },
    validationSchema: object().shape({
      userName: string().required(),
    }),
  },
  {
    id: 'company',
    component: CompanyInfo,
    initialValues: {
      companyName: '',
    },
    validationSchema: object().shape({
      companyName: string().required(),
    }),
    actionLabel: 'Proceed',
    onAction: (sectionValues, formValues) => {
      if (sectionValues.companyName === 'argh!') {
        throw new Error('Please, choose a better name!')
      }
    },
  },
  {
    id: 'summary',
    component: Summary,
  },
]
