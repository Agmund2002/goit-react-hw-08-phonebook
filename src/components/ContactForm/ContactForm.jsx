import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Label,
  ModernErrorMessage,
  ModernField,
  ModernForm,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const phoneRegExp =
  '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Short phone number')
    .max(18, 'Long phone number')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerAdd = inputValue => {
    if (contacts.find(({ name }) => name === inputValue.name)) {
      return Notify.failure(`${inputValue.name} is already in contacts`);
    }

    dispatch(addContact(inputValue));
    Notify.success(`${inputValue.name} added to contacts`);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        handlerAdd(values);
        actions.resetForm();
      }}
    >
      <ModernForm>
        <Label>
          Name
          <ModernField name="name" placeholder="Jane Doe" />
          <ModernErrorMessage component="span" name="name" />
        </Label>

        <Label>
          Phone number
          <ModernField type="tel" name="number" placeholder="000-000-0000" />
          <ModernErrorMessage component="span" name="number" />
        </Label>

        <Button className='button' type="submit">Add contact</Button>
      </ModernForm>
    </Formik>
  );
};
