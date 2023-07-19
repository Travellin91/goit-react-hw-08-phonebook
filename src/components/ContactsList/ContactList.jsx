import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';

import ContactItem from './ContactItem';
import { StyledList } from './Styles';
import Loader from '../Loader/Loader';
import Notification from '../Notification';
import Button from '../Button';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const loading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactsList = filter ? filteredContacts() : contacts;

  return (
    <>
      {loading && Loader}
      {contactsList.length ? (
        <StyledList>
          {contactsList.map(({ id, name, number }) => (
            <li className="listItem" key={id}>
              <ContactItem name={name} number={number} />
              <Button
                title="Видалити"
                onClick={() => dispatch(deleteContact(id))}
              />
            </li>
          ))}
        </StyledList>
      ) : (
        <Notification
          text={filter ? 'Could not find this name' : 'Список контактів порожній'}
        />
      )}
    </>
  );
};

export default ContactList;
