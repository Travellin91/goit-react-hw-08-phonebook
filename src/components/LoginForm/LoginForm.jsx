import { useDispatch } from "react-redux";
import { login } from '../../redux/auth/operations';

import { StyledForm } from './Styles';
import Button from '../Button';

const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = evt => {
		evt.preventDefault();
		const form = evt.currentTarget;
		dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
		);
		form.reset();
	}

	return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <h2 className="title">Будь ласка, увійдіть</h2>
      <label className="formLabel">
        <span className="labelTitle">E-mail:</span>
        <input className="inputTag" type="email" name="email" />
      </label>
      <label className="formLabel">
        <span className="labelTitle">Password:</span>
        <input className="inputTag" type="password" name="password" />
      </label>
      <Button title="Увійти" type="submit" />
    </StyledForm>
  );
};

export default LoginForm;
