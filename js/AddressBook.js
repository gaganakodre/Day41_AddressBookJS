var prompt = require("prompt-sync")({sigint: true});
class Person
{
    //properties
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;  
    emailId;

    //defining constructor of class using constructor keeyword
    constructor(...parameters)
    {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6]; 
        this.emailId = parameters[7];
    }
    //methid to return everything in string
    toString()
    {
        return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZipCode: ${this.zipCode}\nPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}`;
    }
}
try
{
    let firstName = prompt('Enter FirstName: ');
    let lastName = prompt('Enter lastName: ');
    let address = prompt('Enter Address: ');
    let city = prompt('Enter city: ');
    let state = prompt('Enter state: ');
    let zipCode = parseInt(prompt('Enter Zip Code: '));
    let phoneNumber = parseInt(prompt('Enter Phone Number: '));
    let emailId = prompt('Enter Email Id: ');
    //Object for class
    let person = new Person(firstName,lastName,address,city,state,zipCode,phoneNumber,emailId);
    console.log("************************Contact Deatils******************");
   console.log(person.toString());
}
catch(e)
{
    console.error(e);
}