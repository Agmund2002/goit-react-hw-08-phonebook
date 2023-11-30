import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { change } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={evt => dispatch(change(evt.target.value))}
      />
    </Label>
  );
};
