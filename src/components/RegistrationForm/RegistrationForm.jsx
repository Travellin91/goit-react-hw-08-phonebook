import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/operations";

import { StyledForm } from './Styles';
import Button from '../Button';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
		const form = evt.currentTarget;
		dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
		form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <h2 className="title">Будь ласка, зареєструйтесь</h2>
      <label className="formLabel">
        <span className="labelTitle">Ім'я:</span>
        <input className="inputTag" type="text" name="name" />
      </label>
      <label className="formLabel">
        <span className="labelTitle">E-mail:</span>
        <input className="inputTag" type="email" name="email" />
      </label>
      <label className="formLabel">
        <span className="labelTitle">Пароль:</span>
        <input className="inputTag" type="password" name="password" />
      </label>
      <Button title="Create account" type="submit" />
    </StyledForm>
  );
};

export default RegistrationForm;
