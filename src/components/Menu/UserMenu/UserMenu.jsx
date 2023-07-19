import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/operations';
import { StyledUserMenu } from './Styles';

const UserMenu = () => {
  const dispatch = useDispatch();
    const userName = useSelector((state => state.auth.user.name));

  return (
    <StyledUserMenu>
      <p>Привіт, {userName}</p>
      <button className='logoutBtn' type="button" onClick={() => dispatch(logout())}>
        Вихід
      </button>
    </StyledUserMenu>
  );
};
export default UserMenu;
