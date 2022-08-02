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
    get firstname() {return this._firstname; }
    set firstname(firstname) {
        let firstnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (firstnameRegex.test(firstname))//test is used to check pattren is mathing or not
        {
            this._firstname = firstname;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._firstname=firstname;
    }
    get lastname() {return this._lastname; }
    set lastname(lastname) {
        let lastnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (lastnameRegex.test(lastname))//test is used to check pattren is mathing or not
        {
            this._lastname = lastname;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._lastname=lastname;
    }
    get address() {return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if (addressRegex.test(address))//test is used to check pattren is mathing or not
        {
            this._address = address;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._address=address;
    }
    get city() {return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(city))//test is used to check pattren is mathing or not
        {
            this._city = city;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._city=city;
    }
    get state() {return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(state))//test is used to check pattren is mathing or not
        {
            this._state = state;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._state=state;
    }
    get zip() {return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^((\+91)?|91)?[789][0-9]{9}$');
        if (zipRegex.test(zip))//test is used to check pattren is mathing or not
        {
            this._zip = zip;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._zip=zip;
    }
    get phoneNumber() {return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[1-9](1)[0-9]{2,}$');
        if (phoneNumberRegex.test(phoneNumber))//test is used to check pattren is mathing or not
        {
            this._phoneNumber = phoneNumber;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._phoneNumber=phoneNumber;
    }
    get email() {return this._email; }
    set email(email) {
        let emailRegex = RegExp('^[A-Z0-9a-z+_.-]{6,}+@[a-z.]$');
        if (emailRegex.test(email))//test is used to check pattren is mathing or not
        {
            this._email =email;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._email=email;
    }
    toString()
    {
        
        return "firstname:"+this.firstname +"\tlastname:"+this.lastname +"\taddress:"+this.address +"\tcity:"+this.city +"\tstate:"+this.state +"\tzip:"+this.zip +"\tphonenumber:"+this.phoneNumber +"\temail:"+this.email; 
        
    }
}
//addressbookArray=new Array();
try{
    let addressBook=new AddressBook("Janardhana","Hd","RRnagara","Bengaluru","Karnataka",90876,9881060153,"example.samplemail@gmail.com");
    //addressbookArray.push(addressBook).toString();
    console.log(addressBook.toString());
}
catch(e)
{
    console.error(e);
}