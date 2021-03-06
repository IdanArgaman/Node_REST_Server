export class Contact {
    getContacts() {
        return Promise.resolve([{
            "_id": '12345',
            "firstName": "Joe",
            "lastName": "Black",
            "title": "Mr.",
            "company": "Dev Inc.",
            "jobTitle": "DevOps Engineer",
            "address": "45 imaginary street",
            "city": "Namur",
            "country": "Belgium",
            "primaryContactNumber": "+012345678901",
            "otherContactNumbers": ["+023456789987", "+098765432101"],
            "primaryEmailAddress": "joe.black@mail.com",
            "otherEmailAddresses": ["jblack@othermail.com"],
            "groups": ["Dev", "Node.js"],
            "socialMedia": [{
                    "name": "Linkedin",
                    "link": "https://www.linkedin.com/in/joeblack/"
                },
                {
                    "name": "Twitter",
                    "link": "https://www.twitter.com/@joeblack/"
                }
            ]
        }]);
    }
}