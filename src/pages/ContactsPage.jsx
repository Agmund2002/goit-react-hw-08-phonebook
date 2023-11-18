import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Message, SecondaryTitle } from 'components/individualElements/Title.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selectors';
import { BarLoader } from 'react-spinners';

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
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          {!loading && <ContactList />}
          {loading && <BarLoader />}
        </section>
      )}
      {error && (
        <Message>Oops... Something went wrong! Try reloading the page</Message>
      )}
    </>
  );
};

export default ContactsPage;
