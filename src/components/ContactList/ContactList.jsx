import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, Btn } from "./ContactList.styled";
import {RiDeleteBinLine} from 'react-icons/ri'
import { getVisibleContacts } from "../../redux/selectors";
import { removeContact } from "redux/contactsSlice";


export const ContactList = () => {
    
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const handleDelete = contactId => {
        dispatch(removeContact(contactId));
    }; 

    return (
        <List>
            {contacts.map(({ name, number, id }) => {
                return (
                    <ListItem key={id}>
                        <span>{name}:</span>
                        <span>{number}</span>
                        <Btn
                        type="button"
                        name="delete"
                        onClick={() => handleDelete(id)}>
                        <RiDeleteBinLine size="14"/>
                    </Btn>
               </ListItem>
           )
       })}
    </List>
    )
    
}


