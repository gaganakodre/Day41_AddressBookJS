

class AddressBook
{
    //property
    firstname;
    


    //constructor
    constructor(...params)
    {
        this.firstname=params[0];
        
    }
    toString()
    {
        
        return "firstname:"+this.firstname ;
        
    }
    
    get firstname() {return this._firstname; }
    set firstname(firstname) {
        try{
            let firstnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (firstnameRegex.test(firstname))//test is used to check pattren is mathing or not
        {
            this._firstname = firstname;
        }
        else throw 'Name is Incorrect!';
        this._firstname=firstname;
        }
        catch(e)
        {
            console.error(e);
        }
    }
}
var prompt = require("prompt-sync")();
addressbookArray=new Array();
try{
    firstname=prompt("entre ur name:")
    let addressBook=new AddressBook(firstname);
    addressbookArray.push(addressBook).toString();
    console.log(addressbookArray);
}
catch(e)
{
    console.error(e);
}