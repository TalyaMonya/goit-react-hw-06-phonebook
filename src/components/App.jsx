import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { Layout, Title, SubTitle, Empty } from "./Layout";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from "./Filter/Filter";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts'));
  });
  const [filter, setFitler] = useState('');
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  // Додавання нового контакту в список котактів
  const addContact = contact => {
    const isInContact = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...contact }
    ]);
  };
  
  // Зміна значення фільтру
  const changeFilter = e => {
    setFitler(e.target.value.trim());
  };

  // Отримання відфільтрованих контактів
  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  // Видалення контакту зі списку

  const removeContact = contactId => {
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== contactId))
  };

    const visibleContacts = getVisibleContacts();
   

    return (
      <Layout>
        <Title>Your Phonebook</Title>
        <ContactForm onAdd={addContact} />

        <SubTitle>Contacts</SubTitle>
        {contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={changeFilter} />
        ) : (
            <Empty>Your phonebook is empty. Add first contact!</Empty>
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoteContact={removeContact} />
        )}
      </Layout>
    )
  }

