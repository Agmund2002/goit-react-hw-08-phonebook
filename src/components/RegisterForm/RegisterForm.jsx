import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Label,
  ModernErrorMessage,
  ModernField,
  ModernForm,
  PassBox,
  ShowPassBtn,
} from './RegisterForm.styled';

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
      validationSchema={schema}
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
      <ModernForm>
        <Label>
          Username
          <ModernField
            name="username"
            type="text"
            autoComplete="username"
            placeholder="John Doe"
          />
          <ModernErrorMessage component="span" name="username" />
        </Label>

        <Label>
          Email
          <ModernField
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@email.com"
          />
          <ModernErrorMessage component="span" name="email" />
        </Label>

        <Label>
          Password
          <PassBox>
            <ModernField
              className="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="off"
            />
            <ShowPassBtn
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoMdEyeOff color="rgba(153,153,153,0.8)" />
              ) : (
                <IoMdEye color="rgba(153,153,153,0.8)" />
              )}
            </ShowPassBtn>
          </PassBox>
          <ModernErrorMessage component="span" name="password" />
        </Label>

        <Label>
          Confirm password
          <PassBox>
            <ModernField
              className="password"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              autoComplete="off"
            />
            <ShowPassBtn
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoMdEyeOff color="rgba(153,153,153,0.8)" />
              ) : (
                <IoMdEye color="rgba(153,153,153,0.8)" />
              )}
            </ShowPassBtn>
          </PassBox>
          <ModernErrorMessage component="span" name="confirmPassword" />
        </Label>

        <button className="button" type="submit">
          Register
        </button>
      </ModernForm>
    </Formik>
  );
};
