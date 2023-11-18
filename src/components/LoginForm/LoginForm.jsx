import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Email
          <Field
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@email.com"
          />
          <ErrorMessage component="span" name="email" />
        </label>

        <label>
          Password
          <Field
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
          <ErrorMessage component="span" name="password" />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
