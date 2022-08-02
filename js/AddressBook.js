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
    //regex patterns
    let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    let addresspattern = new RegExp('^[A-za-z\\s]{4,}$');
    let emailPattern = new RegExp('^[a-z]([+. \-_]{1}\w+)?@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?$');
    let phoneNumPattern =new RegExp('^[0-9]\\s[0-9]{10}$');
    let zipCodePattern = new RegExp('^[1-9](1)[0-9]{2,}$');
    //FirstName
    let firstName = prompt('Enter FirstName: ');
    if(!namePattern.test(firstName))
        throw 'Error!! First name is in Incorrect Format';
    //LastName
    let lastName = prompt('Enter lastName: ');
    if(!namePattern.test(lastName))
        throw 'Error!! Last name is in Incorrect Format';
    //Address
    let address = prompt('Enter Address: ');
    if(!addresspattern.test(address))
        throw 'Error!! Address should have minimum 4 characters';
    //city
    let city = prompt('Enter city: ');
    if(!addresspattern.test(city))
        throw 'Error!! City should have minimum 4 characters';
    //state
    let state = prompt('Enter state: ');
    if(!addresspattern.test(state))
        throw 'Error!! State should have minimum 4 characters';
    //zipCode
    let zipCode = prompt('Enter Zip Code: ');
    if(!zipCodePattern.test(zipCode))
        throw 'Error!! ZipCode is not valid';
    //phone number
    let phoneNumber = prompt('Enter Phone Number: ');
    if(phoneNumPattern.test(phoneNumber))
        throw 'Error!! PhoneNumber is not valid';
    //email id
    let emailId = prompt('Enter Email Id: ');
    if(emailPattern.test(emailId))
        throw 'Error!! Email Id is not valid';
    //Object for class
    let person = new Person(firstName,lastName,address,city,state,zipCode,phoneNumber,emailId);
    console.log("************************Contacts Deatils******************");
    console.log(person.toString());
}
catch(e)
{
    console.error(e);
}