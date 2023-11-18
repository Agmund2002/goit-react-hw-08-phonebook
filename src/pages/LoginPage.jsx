import { LoginForm } from 'components/LoginForm/LoginForm';
import { SecondaryTitle } from 'components/individualElements/Title.styled';

const LoginPage = () => {
  return (
    <section>
      <SecondaryTitle>Login</SecondaryTitle>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
