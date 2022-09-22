import {nanoid }from 'nanoid'
import s from 'components/Contacts/Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, delItems } from 'components/redux/store'


function Contacts (){
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const contacts = useSelector(state => state.items)
    const options = filter
    ?  contacts.filter(user => user.userName.includes(filter))
    : contacts;

    function handleDelete(event) {
        const value = event.target.name
        dispatch(delItems(value))
    }
    function handleChangeFilter(event) {
        const value = event.target.value.toLowerCase();
        dispatch(changeFilter(value))
    }
    
    if(!options){
        return
    }
    return(
        <>
        <label className={s.contactForm}>
            Find contacts by name
            <input className={s.contactInput} type="text" name="filter" onChange={handleChangeFilter} />
        </label>
        <ul className={s.contactList}>
            {options.map(({id, userName, tel}) => (
                <li key={id} className={s.contactItem} onClick={handleDelete}>
                    name:{userName} tel:{tel}
                    <button key={nanoid(2)} type="button" name={userName} >Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Contacts
