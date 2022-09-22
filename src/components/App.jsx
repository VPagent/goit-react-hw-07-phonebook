import { useEffect } from 'react';
import Form from 'components/Form';
import Section from 'components/Section';
import Contacts from 'components/Contacts';
import { useSelector } from 'react-redux';


export function App() {
  const contacts = useSelector(state => state.items);

  useEffect(() => {
    if (!contacts) {
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      
        <Section title="Phonebook">
          <Form options={contacts}></Form>
        </Section>
        <Section title="Contacts">
          <Contacts/>
        </Section>
    </div>
    
  );
}

