import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import Page from '../../components/page';
import { TextInput } from '../../components/input/text';

import { login } from '../../functions/auth';

import './style.scss';
import { NavLink } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <Page className="auth-page">
        <Container className="title-container">
          <h1 className="title">Log In</h1>
        </Container>
        <Formik
          initialValues={{
            email:"",
            password: "",
          }}
          onSubmit={(values) => {
            login(values);
          }}
        >
          <Form className="form-container">
            <TextInput
              name="email"
              label="Email"
              type="email"
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
                Log In
              </Button>
            </Container>
          </Form>
        </Formik>

        <div className='linked-text'>
          <a>Don't have an account?   </a>
          <NavLink to = '/register'>
            <a>Sign Up</a>
          </NavLink>
        </div>

      </Page>
    )
  }
}
