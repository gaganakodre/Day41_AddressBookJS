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
}