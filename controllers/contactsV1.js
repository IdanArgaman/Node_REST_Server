var ObjectID = require("bson-objectid");
import { errorHandler } from "../utils";
import { Contact } from "../models";

export const getContacts = async (req, res) => {
    const contacts = await new Contact().getContacts();
    res.json(contacts);
};

export const getFromattedContacts = async (req, res) => {
    const contacts = await new Contact().getContacts();
    res.format({
        // using new object method syntax (instead of json: function() {...})
        json() {
            res.json(contacts);
        },

        text() {
            const contactsAstext = contacts
                .map(contact => Object.entries(contact).map(t => t.join(":")))
                .join("\n\n ==========================>>    ");
            res.send(contactsAstext);
        },

        html() {
            const html = [
                `<table style="border: 1px solid black;">`,
                `<th style="border: 1px solid black; background:red;">Contact ID</th>
                <th style="border: 1px solid black; background:black; color:white;">Contact Data</th>`
            ];

            contacts.forEach(contactObj => {
                let { _id, ...contact } = contactObj;

                // reorder properties
                contact = Object.keys(contact)
                    .sort()
                    .reduce(
                        (acc, key) => ({
                            ...acc,
                            [key]: contactObj[key]
                        }), {
                            firstName: contactObj.firstName,
                            lastName: contactObj.lastName
                        }
                    );

                html.push(`
              <tr style="border: 1px solid black;">
              <td style="border: 1px solid black; background:yellow;">${_id}</td>
              <td style="border: 1px solid black;">${Object.entries(contact)
                .map(([key, value]) => {
                  return `<div style="border: solid green 5px;"><p><b>${key}</b>: ${JSON.stringify(
                    value,
                    function replacer(k, v) {
                      return k === "_id" ? undefined : v;
                    },
                    4
                  ).replace(/"/g, "")}</p></div>`;
                })
                .join("\n")}</td>
              </tr>s
            `);
            });

            res.send(html.join("\n"));
        }
    });
};

export const getContact = async (req, res, next) => {
    const contactId = req.params.id;

    // The request is bad - malformed
    contactId || next(errorHandler("Please enter a contact ID", 400));

    // The request is correct but contains an invalid values
    contactId.length >= 24 || next(errorHandler("Invalid contact ID", 422));

    // Retrieve entity!!!

    const contact = (await new Contact().getContacts())[0];
    res.json(contact);
};

export const postContact = async (req, res, next) => {
    const contact = req.body;
    contact || next(errorHandler("Please submit valid contact", 400));
    contact.primaryContactNumber || next(errorHandler("Please submit valid contact", 422));

    // STORE

    // CHECK 

    res.status(201)
        .set("location", `/contacts/${_id}`)
        .json({
            message: "Contact created",
            data: {}
        });

    // Or if fails
    // next(errorHandler("No contact created"));
};

export const postManyContacts = async (req, res, next) => {
    const n = parseInt(req.query.n);
    n < 100 || next(errorHandler("Please enter number less than 100", 422));

    // Insert many

    res.status(201)
        .json({
            message: `${n} contacts generated`,
            // Return list of IDs
            // locations: generatedContacts.map(({
            //     _id
            // }) => `/api/v1/contacts/${_id}`)
        });
};

export const putContact = async (req, res, next) => {
    const contactId = req.params.id;
    const contactUpdate = req.body;

    contactId || next(errorHandler("Please enter a contact ID", 400));
    contactUpdate || next(errorHandler("Please submit valid contact", 400));

    // UPDATE

    res.json({
        message: "Contact updated"
    });

    // OR
    // next(errorHandler("No data updated"));
};

export const deleteContact = async (req, res, next) => {
    const contactId = req.params.id;
    contactId || next(errorHandler("Please enter a contact ID", 422));

    // DELETE

    res.json({
        message: "Contact deleted"
    });

    // OR
    // next(errorHandler("No data deleted"));
};