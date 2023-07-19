import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactsList';
import SearchInput from '../components/SearchInput';
import Section from '../components/Section';

const Phonebook = () => {
  return (
    <>
      <Section title="Телефонна книга">
        <ContactForm />
      </Section>
      <Section title="Контакти">
        <SearchInput />
        <ContactList />
      </Section>
    </>
  );
};

export default Phonebook;