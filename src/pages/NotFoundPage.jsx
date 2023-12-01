import { Container } from 'components/Container/Container';
import { NotFound } from 'components/NotFound/NotFound';
import { SecondaryTitle } from 'components/individualElements/Title';

const NotFoundPage = () => {
  return (
    <section>
      <Container>
        <SecondaryTitle isVisible={false}>Not found</SecondaryTitle>
        <NotFound />
      </Container>
    </section>
  );
};

export default NotFoundPage;
