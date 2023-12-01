import { Container } from 'components/Container/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { SecondaryTitle } from 'components/individualElements/Title';
import { useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { selectIsLoading } from 'redux/auth/selectors';

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (<BarLoader />) : (
    <section>
      <Container>
        <SecondaryTitle isVisible={false}>Login</SecondaryTitle>
        <LoginForm />
      </Container>
    </section>
  );
};

export default LoginPage;
