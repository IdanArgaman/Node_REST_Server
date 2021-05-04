// Place any contact services like formatting and cache (redis) but not a direct fetching!
// The direct fetching is done by using the model!
import { Contact } from "../models";

export default class ContactsService {

    // Privates
    // #contactModel;
    // #cacheService;
    // #contactUtil;
    // #gfsBucket;

    async findContacts() {
        // The model is used to retrieve data!
        const contacts = await new Contact().getContacts();
        // The service is used for shaping, formatting and more!
        return contacts.map(contact => ({
            firstName: contact.firstName,
            lastName: contact.lastName
        }))
    }
}