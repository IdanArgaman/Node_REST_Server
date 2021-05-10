const faker = require("faker");
const fs = require("fs");

const generatePersonsData = (number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: number,
            name: faker.name.firstName(),
            description: faker.lorem.paragraphs(2),
            picture: faker.image.avatar(),
            country: faker.address.country(),
            joining_date: faker.date.future(),
        });
        number--;
    }
    return persons;
};

export const mkDB = (number) => {
    fs.writeFileSync(
        "./db.json",
        JSON.stringify({ users: generatePersonsData(number) })
    );
};