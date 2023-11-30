import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values))
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
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </button>
          <ErrorMessage component="span" name="password" />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
