import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Label, ModernErrorMessage, ModernField, ModernForm, PassBox, ShowPassBtn } from './LoginForm.styled';

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
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <ModernForm>
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

        <button className="button" type="submit">
          Login
        </button>
      </ModernForm>
    </Formik>
  );
};
