import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { BarLoader } from 'react-spinners';
import { Message, SecondaryTitle } from 'components/individualElements/Title';
import { Container } from 'components/Container/Container';

const ContactsPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {!error && (
        <section>
          <Container>
            <SecondaryTitle isVisible={false}>Contacts</SecondaryTitle>
            <Filter />
            {!loading && <ContactList />}
            {loading && <BarLoader />}
          </Container>
        </section>
      )}
      {error && (
        <section>
          <Container>
            <SecondaryTitle isVisible={false}>Contacts</SecondaryTitle>
            <Message>
              Oops... Something went wrong! Try reloading the page
            </Message>
          </Container>
        </section>
      )}
    </>
  );
};

export default ContactsPage;
