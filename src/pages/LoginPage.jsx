import { Container } from 'components/Container/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { SecondaryTitle } from 'components/individualElements/Title';

const LoginPage = () => {
  return (
    <section>
      <Container>
        <SecondaryTitle isVisible={false}>Login</SecondaryTitle>
        <LoginForm />
      </Container>
    </section>
  );
};

export default LoginPage;
