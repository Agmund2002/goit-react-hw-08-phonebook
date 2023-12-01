import { Contact } from 'components/Contact/Contact';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/filter/selectors';
import { Message } from 'components/individualElements/Title';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <>
      {filterContacts.length ? (
        <List>
          {filterContacts.map(item => (
            <Item key={item.id}>
              <Contact data={item} />
            </Item>
          ))}
        </List>
      ) : (
        <Message>Phonebook is empty</Message>
      )}
    </>
  );
};
