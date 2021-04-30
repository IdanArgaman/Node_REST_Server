// Place any contact services like formatting!
import { Contact } from "../models";

export default class ContactsService {

    // Privates
    // #contactModel;
    // #cacheService;
    // #contactUtil;
    // #gfsBucket;

    async findContacts() {
        const contacts = await new Contact().getContacts();
        return contacts.map(contact => ({
            firstName: contact.firstName,
            lastName: contact.lastName
        }))
    }
}