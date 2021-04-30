import { ContactService } from "../services";

const contactService = new ContactService();

export const getBasicContacts = async (req, res, next) => {
    const url = `${req.protocol}://${req.hostname}:${req.app.get("port")}`;

    // const filter = req.body.filter;
    // const offset = +req.query.offset;
    // const limit = +req.query.limit;
    // const fields = {
    //   firstName: 1,
    //   lastName: 1,
    //   primaryContactNumber: 1,
    //   primaryEmailAddress: 1,
    //   image: 1
    // };

    const contacts = await contactService.findContacts(
        // userId,
        // filter,
        // fields,
        // offset,
        // limit,
        // next
    );

    contacts &&
        res.format({
            json() {
                res.json(contacts);
            }
        });
};