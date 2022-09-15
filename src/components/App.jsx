import { useState, useEffect } from 'react';
import Form from 'components/Form';
import Section from 'components/Section';
import Contacts from 'components/Contacts';

export function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log("второй")
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function changeState(arr) {
    setContacts(prev => [...prev, ...arr]);
  }

  const filteredUsers = filter
    ? contacts.filter(user => user.userName.includes(filter))
    : [];

  function handleChangeFilter(event) {
    const value = event.target.value.toLowerCase();
    setFilter(value);
  }
  function handleDelete(event) {
    const withoutDel = contacts.filter(
      user => user.userName !== event.target.name
    );
    setContacts(withoutDel);
  }

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
      <Section title={'Phonebook'}>
        <Form onSetApp={changeState} options={contacts}></Form>
      </Section>
      <Section title={'Contacts'}>
        <Contacts
          options={filter ? filteredUsers : contacts}
          onChangeInput={handleChangeFilter}
          filterValue={filter}
          onHandle={handleDelete}
        />
      </Section>
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount(){
//     const savedContacts = localStorage.getItem("contacts")

//     if (savedContacts){
//       this.setState({contacts: JSON.parse(savedContacts)})
//     }
//   }
//   componentDidUpdate(_, prevState){
//     const { contacts } = this.state
//     if(prevState.contacts.length !== contacts.length){
//       localStorage.setItem("contacts", JSON.stringify(contacts))
//     }
//   }
//   handleChange = (event) => {
//     const inputName = event.target.name
//     const value = event.target.value.toLowerCase()
//     this.setState({[inputName]: value})
//   }
//   handleDelete = (event) => {
//     const {contacts} = this.state
//     const withoutDel = contacts.filter(user => user.userName !== event.target.name)
//     this.setState({contacts: withoutDel})
//   }

//   render() {
//     const filterValue = this.state.filter
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Section title="Phonebook">
//           <Form onSetApp={this.changeState} options={this.state.contacts}/>
//         </Section>
//         <Section title="Contacts">
//           <Contacts options={!filterValue? this.state.contacts : this.handleFilter()} onChangeInput={this.handleChange} filterValue={this.state.filter} onHandleDelete={this.handleDelete}/>
//         </Section>
//       </div>
//     );
//   }
// }
