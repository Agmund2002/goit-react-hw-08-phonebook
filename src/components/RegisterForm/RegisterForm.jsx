import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const passwordRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,20}$/;

const schema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email value').required('Required'),
  password: Yup.string()
    .min(8, 'Min 8 symbols')
    .max(20, 'Max 20 symbols')
    .matches(
      passwordRegExp,
      'The password must contain at least one uppercase letter and a number'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      // validationSchema={schema}
      onSubmit={(values, actions) => {
        const { username, email, password } = values;
        dispatch(
          register({
            name: username,
            email,
            password,
          })
        );
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Username
          <Field
            name="username"
            type="text"
            autoComplete="username"
            placeholder="John Doe"
          />
          <ErrorMessage component="span" name="username" />
        </label>

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
            autoComplete="off"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </button>
          <ErrorMessage component="span" name="password" />
        </label>

        <label>
          Confirm password
          <Field
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            autoComplete="off"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </button>
          <ErrorMessage component="span" name="confirmPassword" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
