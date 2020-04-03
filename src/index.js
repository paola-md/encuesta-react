import FormikWizard from 'formik-wizard'
import React from 'react'
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles-custom.css";

import steps from './steps'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>  TIEMPO TERMINADO  </span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CIE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  timer:{
    fontSize: "1rem",
    textAlign: "right"
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
}));


function FormWrapper({
  children,
  isLastStep,
  status,
  goToPreviousStep,
  goToNextStep,
  canGoBack,
  actionLabel,
})
{
  const classes = useStyles();
  return (
    <React.Fragment>
    <CssBaseline />
       <AppBar position="absolute" color="default" className={classes.appBar}>
         <Toolbar>
           <Typography variant="h6" color="inherit" noWrap>
             Encuesta de salarios de la CDMX        [
           <Countdown  className={classes.timer}
            date={Date.now() + 60000}
            renderer={renderer} onComplete ={goToPreviousStep}
             />
            </Typography>
          ]
         </Toolbar>

       </AppBar>
       <main className={classes.layout}>
         <Paper className={classes.paper}>
         <div>
          {status && (
            <div>
              {status.message}
              <hr />
            </div>
          )}
          {children}
        <hr />
          <div className={classes.buttons}>
            <Button type="button" onClick={goToPreviousStep} color="primary"
            disabled={!canGoBack}  className={classes.button}>
              Anterior
            </Button>
            <Button type="submit"  className={classes.button} variant="contained" color="primary">
              {actionLabel || (isLastStep ? 'Finalizar' : 'Siguiente')}
            </Button>
          </div>
        </div>

        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  )
}

function App() {
    const classes = useStyles();
  const handleSubmit = React.useCallback((values) => {
    console.log('full values:', values)

    return {
      message: 'Gracias por la respuesta',
    }
  }, [])

  return (
    <FormikWizard steps={steps} onSubmit={handleSubmit} render={FormWrapper} />
  )
}

export default App

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
