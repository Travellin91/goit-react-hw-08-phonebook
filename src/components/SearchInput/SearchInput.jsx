import { useSelector, useDispatch } from 'react-redux';
import { change } from '../../redux/contacts/slice';

import { StyledInput } from './Styles';

const SearchInput = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = evt => dispatch(change(evt.target.value));

  return (
    <StyledInput>
      <p className="inputTitle">Фільтрувати за ім'ям:</p>
      <input
        className="inputTag"
        type="text"
        name="filter"
        title="Будь ласка, введіть ім'я"
        onChange={handleChange}
        value={filter}
      />
    </StyledInput>
  );
};

export default SearchInput;
