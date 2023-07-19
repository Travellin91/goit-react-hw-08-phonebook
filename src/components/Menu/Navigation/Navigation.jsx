import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {StyledNavigation} from './Styles'

const Navigation = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <StyledNavigation>
      <NavLink className="navLink" to="/">
        Головна
      </NavLink>
      {isLoggedIn && (
        <NavLink className="navLink" to="/phonebook">
          Телефонна книга
        </NavLink>
      )}
    </StyledNavigation>
  );
};
export default Navigation;