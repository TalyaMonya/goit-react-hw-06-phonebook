import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';



const phoneContacts = {
    items: [
        { id: 'id-1', name: 'Harry Potter', number: '333-31-32' },
        { id: 'id-2', name: 'Hermione Granger', number: '444-41-42' },
        { id: 'id-3', name: 'Ron Weasley', number: '555-51-52' },
        { id: 'id-4', name: 'Draco Malfoy', number: '666-61-62' },
    ],
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: phoneContacts,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(newContact) {
                return {
                    payload: { id: nanoid(), ...newContact },
                };
            },
        },
            
            removeContact(state, action) {
                const index = state.items.findIndex(
                    contact => contact.id !== action.payload
                );
                state.items.splice(index, 1);
            },
         },
});

export const { addContacts, removeContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
    { key: 'contacts', storage },
    contactsSlice.reducer
);