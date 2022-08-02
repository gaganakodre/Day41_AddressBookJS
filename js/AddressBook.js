var prompt = require("prompt-sync")();
class AddressBook
{
    //property
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;


    //constructor
    constructor(...params)
    {
        this.firstname=params[0];
        this.lastname=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4]
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.email=params[7];
    }
    toString()
    {
        
        return "firstname:"+this.firstname +"\tlastname:"+this.lastname +"\taddress:"+this.address +"\tcity:"+this.city +"\tstate:"+this.state +"\tzip:"+this.zip +"\tphonenumber:"+this.phoneNumber +"\temail:"+this.email; 
        
    }
    get firstname() {return this._firstname; }
    set lastname(firstname) {
        try{
            let firstnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (firstnameRegex.test(firstname))//test is used to check pattren is mathing or not
        {
            this._firstname = firstname;
        }
        else throw 'FirstName is Incorrect! please specify atleast one uppercase at first';
        this._firstname=firstname;
        }
        catch(e)
        {
            console.error(e);
        }
    }

    get lastname() {return this._lastname; }
    set lastname(lastname) {
        try{
            let lastnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (lastnameRegex.test(lastname))//test is used to check pattren is mathing or not
        {
            this._lastname = lastname;
        }
        else throw 'LastName is Incorrect! please specify atleast one uppercase at first';
        this._lastname=lastname;
        }
        catch(e)
        {
            console.error(e);
        }
    }
    
    get address() {return this._address; }
    set address(address) {
        try{
            let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if (addressRegex.test(address))//test is used to check pattren is mathing or not
        {
            this._address = address;
        }
        else throw 'address is Incorrect! please enter atleast 4 character to accept'; 
        this._address=address;
        }
        catch(e)
        {
            console.error(e);
        }
    }
    get city() {return this._city; }
    set city(city) {
        try{
            let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(city))//test is used to check pattren is mathing or not
        {
            this._city = city;
        }
        else throw 'cityname is Incorrect! please enter atleast 4 character to accept'; 
        this._city=city;
        }
        catch(e)
        {
            console.error(e);
        }
    }
    get state() {return this._state; }
    set state(state) {
        try{
            let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(state))//test is used to check pattren is mathing or not
        {
            this._state = state;
        }
        else throw 'StateName is Incorrect! please enter atleast 4 character to accept'; 
        this._state=state;
        }
        catch(e)
        {
            console.error(e);
        }
    }
    get zip() {return this._zip; }
    set zip(zip) {
        try{
            let zipRegex = RegExp('^[1-9](1)[0-9]{2,}$');
        if (zipRegex.test(zip))//test is used to check pattren is mathing or not
        {
            this._zip = zip;
        }
        else throw 'zipcode is Incorrect!'; 
        this._zip=zip;
        }
        catch(e)
        {
            console.error(e);
        }
    }
    get phoneNumber() {return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        try{
            let phoneNumberRegex = RegExp('^((\+91)?|91)?[789][0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber))//test is used to check pattren is mathing or not
        {
            this._phoneNumber = phoneNumber;
        }
        else throw 'phoneNumber is Incorrect! eg:9881060153'; 
        this._phoneNumber=phoneNumber;
        }
        catch(e)
        {
            console.error(e);
        }
    }
    get email() {return this._email; }
    set email(email) {
        let emailRegex = RegExp('^[A-Z0-9a-z+_.-]{6,}+@[a-z.]$');
        if (emailRegex.test(email))//test is used to check pattren is mathing or not
        {
            this._email =email;
        }
        else throw 'email is Incorrect! like:example.samplemail@gmail.com';
        this._email=email;
    }
    toString()
    {
        
        return "firstname:"+this.firstname +"\tlastname:"+this.lastname +"\taddress:"+this.address +"\tcity:"+this.city +"\tstate:"+this.state +"\tzip:"+this.zip +"\tphonenumber:"+this.phoneNumber +"\temail:"+this.email; 
        
    }
}
var prompt = require("prompt-sync")();
addressbookArray=new Array();
try{
    firstname=prompt("entre ur firstname:");
    lastname=prompt("entre ur Lastname:");
    address=prompt("entre ur address:");
    city=prompt("entre ur city:");
    state=prompt("entre ur state:");
    zip=prompt("entre ur city zip code:");
    email=prompt("entre ur email:");
    phoneNumber=prompt("entre ur phoneNumber:");
    let addressBook=new AddressBook(firstname,lastname,address,city,state,zip,phoneNumber,email);
    addressbookArray.push(addressBook).toString();
    console.log(addressbookArray);
}
catch(e)
{
    console.error(e);
}
//"Janardhana","Hd","RRnagara","Bengaluru","Karnataka",90876,9881060153,"example.samplemail@gmail.com"