import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/searchAPI';
import { selectIsLoading, selectError } from 'redux/contactsSlise';
import { Loader } from './Loader/Loader';
import Filter from './phoneBook/filter/filter';
import ContactForm from './phoneBook/contactForm/contactForm';
import ContactList from './phoneBook/contactList/contactList';
import { Section, Container, Div, H1, DivList, H2 } from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Div>
          <H1>Phonebook</H1>
          <ContactForm />
        </Div>

        <DivList>
          <H2>Contacts</H2>
          <Filter />
          {isLoading && !error && <Loader />}
          <ContactList />
        </DivList>
      </Container>
    </Section>
  )
}
export default App;