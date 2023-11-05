import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, Btn } from "./ContactList.styled";
import {RiDeleteBinLine} from 'react-icons/ri'
import { getVisibleContacts } from "../../redux/selectors";
import { removeContact } from "redux/contactsSlice";


export const ContactList = () => {
    
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(removeContact());

    return (
        <List>
        {contacts.map(contact => (
            <ListItem key={contact.id}>
                {contact.name + ' : ' + contact.number}
                {
                    <Btn
                        type="button"
                        name="delete"
                    onClick={handleDelete}>
                        <RiDeleteBinLine size="14"/>
                    </Btn>
                }
            </ListItem>
        ))}
    </List>
    )
    
}