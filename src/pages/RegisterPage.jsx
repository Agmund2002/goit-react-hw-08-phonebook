import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { SecondaryTitle } from 'components/individualElements/Title.styled';

const RegisterPage = () => {
  return (
    <section>
      <SecondaryTitle>Register</SecondaryTitle>
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
