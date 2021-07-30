import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import Page from '../../components/page';
import { TextInput } from '../../components/input/text';

import { login, register } from '../../functions/auth';

import './style.scss';
import { NavLink } from 'react-router-dom';

export default class Register extends React.Component {
  render() {
    return (
      <Page className="auth-page">
        <Container className="title-container">
          <h1 className="title">Register</h1>
        </Container>
        <Formik
          initialValues={{
            email:"",
            display_name: "",
            password: "",
          }}
          onSubmit={(values) => {
            register(values);
          }}
        >
          <Form className="form-container">
            <TextInput
              name="email"
              label="Email"
              type="email"
            />
            <TextInput
              name="display_name"
              label="Display Name"
              type="text"
            />
            <TextInput
              name="password"
              label="Password"
              type="password"
            />
            <Container className="button-container">
              <Button
                className="button"
                variant="primary"
                type="submit"
              >
                Register
              </Button>
            </Container>
          </Form>
        </Formik>
        
        <div className='linked-text'>
          <a>Already have an account?   </a>
          <NavLink to = '/login'>
            <a>Log In</a>
          </NavLink>
        </div>
        
      </Page>
    )
  }
}
