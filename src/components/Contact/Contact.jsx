import { useDispatch } from 'react-redux';
import { Button, Icon } from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <Icon size='16px' />
      </Button>
    </>
  );
};
