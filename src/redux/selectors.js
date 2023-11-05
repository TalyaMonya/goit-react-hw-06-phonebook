export const getContacts = store => store.contacts.items;

export const getFilter = store => store.filter;

export const getVisibleContacts = store => {
    const contacts = getContacts(store);
    const filter = getFilter(store);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));
};