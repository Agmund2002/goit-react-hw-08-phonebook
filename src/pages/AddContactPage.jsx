import { ContactForm } from 'components/ContactForm/ContactForm';
import { SecondaryTitle } from 'components/individualElements/Title.styled';

const AddContactPage = () => {
  return (
    <section>
      <SecondaryTitle>New contact</SecondaryTitle>
      <ContactForm />
    </section>
  );
};

export default AddContactPage;
