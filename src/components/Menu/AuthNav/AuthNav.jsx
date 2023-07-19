import { NavLink } from 'react-router-dom';
import { StyledAuthMenu } from './Styles';


const AuthNav = () => {
  return (
    <StyledAuthMenu>
      <NavLink className="authLink" to="/register">
        Зареєструватись
      </NavLink>
      <NavLink className="authLink" to="/login">
        Вхід
      </NavLink>
    </StyledAuthMenu>
  );
};

export default AuthNav;