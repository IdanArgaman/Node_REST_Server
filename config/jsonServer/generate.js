const faker = require("faker");
const fs = require("fs");

const generateData = (number) => {
    const data = [];
    while (number >= 0) {
        data.push({
            id: number,
            name: faker.name.firstName(),
            description: faker.lorem.paragraphs(2),
            picture: faker.image.avatar(),
            country: faker.address.country(),
            joining_date: faker.date.future(),
        });
        number--;
    }
    return data;
};

export const mkDB = (number) => {
    fs.writeFileSync(
        "./db.json",
        JSON.stringify({ users: generateData(number) })
    );
};