import { Container } from 'components/Container/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { SecondaryTitle } from 'components/individualElements/Title';
import { useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { selectIsLoading } from 'redux/auth/selectors';

const RegisterPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (<BarLoader />) : (
    <section>
      <Container>
        <SecondaryTitle isVisible={false}>Register</SecondaryTitle>
        <RegisterForm />
      </Container>
    </section>
  );
};

export default RegisterPage;
