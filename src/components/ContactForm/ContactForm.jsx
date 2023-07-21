import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { addContact } from '../../redux/contacts/operations';
import Button from '../Button';
import { StyledForm } from './Styles';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.failure(`${name} Вже додано до списку контактів`);
      return;
    }
    dispatch(addContact({ name: name, number: number }));
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.log('Відбулася непередбачена ситуація');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label className="formLabel">
        <span className="labelTitle">Ім'я:</span>
        <input
          className="inputTag"
          type="text"
          name="name"
          pattern="[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]+)*"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян."
          onChange={handleChange}
          value={name}
          required
        />
      </label>
      <label className="formLabel">
        <span className="labelTitle">Номер:</span>
        <input
          className="inputTag"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону повинен містити лише цифри і може містити пробіли, тире, дужки та може починатися з +"
          onChange={handleChange}
          value={number}
          required
        />
      </label>

      <Button title="Добавити контакт" type="submit" />
    </StyledForm>
  );
};

export default ContactForm;
