import React, { Component } from 'react'
import { RANDINT, FRASES } from './../constants';
import { fieldToTextField } from 'formik-material-ui';
import { TextField} from '@material-ui/core';
import { Formik, Form, Field,FastField, useFormikContext } from "formik";

const RandomPhrases = ({ textFieldProps, ...props }) => {

  const { form: { setTouched, setFieldValue } } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
       <div id='text'><b>{FRASES[RANDINT]}</b></div>

  );
}

export default RandomPhrases;
