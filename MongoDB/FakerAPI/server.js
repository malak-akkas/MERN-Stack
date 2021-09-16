const express = require("express");
const { company } = require("faker");
const faker = require("faker");
const app = express();
const port = 8000;


class User {
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();


    }
}
class Company {
    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get("/api/users/new", (req, res) => {
    var user = new User();
    res.json({
        results: user
    });
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});
app.get("/api/company/user", (req, res) => {
   var user = new User();
   var company = new Company();
   res.json({
       user : user,
       company : company,
   })
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );