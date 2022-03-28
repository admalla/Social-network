import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="email" name="email" />
            </div>
            <ErrorMessage name="email" component="div" />
            <div>
              <Field type="password" name="password" />
            </div>
            <ErrorMessage name="password" component="div" />
            <Field type="checkbox" name="rememberMe" /> Remember Me
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
