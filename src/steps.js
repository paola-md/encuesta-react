import { object, string } from 'yup'

import Instrucciones from './views/Instrucciones'
import PersonasCercanas from './views/PersonasCercanas'
import CompanyInfo from './views/CompanyInfo'
import PersonalInfo from './views/PersonalInfo'
import Summary from './views/Summary'


export default [
  {
    id: 'instruccion',
    component: Instrucciones,
    initialValues: {
      area: '',
    },
  },
  {
    id: 'personasCercanas',
    component: PersonasCercanas,
    initialValues: {
      jefe: '',
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
