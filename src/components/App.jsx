
import Form from 'components/Form';
import Section from 'components/Section';
import Contacts from 'components/Contacts';



export function App() {
  
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
          <Form></Form>
        </Section>
        <Section title="Contacts">
          <Contacts/>
        </Section>
    </div>
    
  );
}

