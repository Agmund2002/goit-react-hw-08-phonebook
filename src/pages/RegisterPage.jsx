import { Container } from 'components/Container/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { SecondaryTitle } from 'components/individualElements/Title';

const RegisterPage = () => {
  return (
    <section>
      <Container>
        <SecondaryTitle isVisible={false}>Register</SecondaryTitle>
        <RegisterForm />
      </Container>
    </section>
  );
};

export default RegisterPage;
