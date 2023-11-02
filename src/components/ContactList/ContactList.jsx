import { List, ListItem, Btn } from "./ContactList.styled";
import {RiDeleteBinLine} from 'react-icons/ri'


export const ContactList = ({contacts, onRemoteContact}) => (
    <List>
        {contacts.map(contact => (
            <ListItem key={contact.id}>
                {contact.name + ' : ' + contact.number}
                {
                    <Btn
                        type="button"
                        name="delete"
                    onClick={() => onRemoteContact(contact.id)}>
                        <RiDeleteBinLine size="14"/>
                    </Btn>
                }
            </ListItem>
        ))}
    </List>
)