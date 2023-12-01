import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/Container/Container';
import { SecondaryTitle } from 'components/individualElements/Title';

const AddContactPage = () => {
  return (
    <section>
      <Container>
        <SecondaryTitle isVisible={false}>New contact</SecondaryTitle>
        <ContactForm />
      </Container>
    </section>
  );
};

export default AddContactPage;
