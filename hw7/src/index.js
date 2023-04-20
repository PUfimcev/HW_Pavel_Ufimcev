class Contact {
    
    #contact = {
        name: '',
        lastName: '',
        age: '',
        phoneNumber: '',
        email: '',
    };
    
    constructor(data){

        if(!data || (!data.name && !data.lastName && !data.age && !data.phoneNumber && !data.email)) return;
        this.#contact.name = data.name;
        this.#contact.lastName = data.lastName;

        if(data.age !== undefined && data.age.length !== 0) this.verifyAge(data);
        if(data.phoneNumber !== undefined && data.phoneNumber.length !== 0) this.verifyPhone(data);
        if(data.email !== undefined && data.email.length !== 0) this.verifyEmail(data);
    }
    
    verifyAge(data){
        
        if(!data.age) return;
        return (data.age <= 0) ? alert(`Incorrect ${data.name}'s age entered. Enter again`) : this.#contact.age = data.age;
        
    }

    verifyPhone(data){
        let regExpPhone = /^\+\d{1,3}\s*\d{2,3}\s*\d{3}\-?\s*\d{2}\-?\s*\d{2}/gim;
        if(!data.phoneNumber) return;
        return  regExpPhone.test(data.phoneNumber) ? this.#contact.phoneNumber = data.phoneNumber : alert(`Incorrect ${data.name}'s phone number entered. Enter again`);
        
    }

    verifyEmail(data){
        
        if(!data.email) return;
        let regExpEmail = /^\D[\w]{2,}\@[\w\-]{2,11}\.[A-Za-z]{2,11}$/gim;
        return  regExpEmail.test(data.email) ? this.#contact.email = data.email : alert(`Incorrect ${data.name}'s email entered. Enter again`);
    }

    edit(newData){
        if(!newData) return;
        
        if(newData.age !== undefined && newData.age.length !== 0) {
            
            if(newData.age <= 0) {
                alert(`Incorrect editable ageage entered. Enter again`);
                newData.age = '<span style="color: red;"><b>INCORRECT</b></span>';
                this.#contact = {...this.#contact, ...newData};
            } else {
                this.#contact = {...this.#contact, ...newData};
            }           
        }

        if(newData.phoneNumber !== undefined && newData.phoneNumber.length !== 0) {
            let regExpPhone = /^\+\d{1,3}\s*\d{2,3}\s*\d{3}\-?\s*\d{2}\-?\s*\d{2}/gim;
            let checkPhone = regExpPhone.test(newData.phoneNumber);
            if(checkPhone) {
                this.#contact = {...this.#contact, ...newData};
            } else {
                alert(`Incorrect editable phone entered. Enter again`);
                newData.phoneNumber = '<span style="color: red;"><b>INCORRECT</b></span>';
                this.#contact = {...this.#contact, ...newData};
            }
        }

        if(newData.email !== undefined && newData.email.length !== 0) {
            let regExpEmail = /^\D[\w]{2,}\@[\w\-]{2,11}\.[A-Za-z]{2,11}$/gim;
            let checkEmail = regExpEmail.test(newData.email);
            if(checkEmail) {
                this.#contact = {...this.#contact, ...newData};
            } else {
                alert(`Incorrect editable email entered. Enter again`);
                newData.email = '<span style="color: red;"><b>INCORRECT</b></span>';
                this.#contact = {...this.#contact, ...newData};
            }
        }

        this.#contact = {...this.#contact, ...newData}
    }

    getContact(){
        return this.#contact;
    }
}

class Contacts{

    #contacts = [];
    #id = 0;

    add(contactsData) {
        if(!contactsData) return;

        const contact = new Contact(contactsData);

        let contactKeyslength = Object.keys(contact.getContact());
        if(contactKeyslength.length === 0) return;
        this.#id++;
        contact.id = this.#id;
        this.#contacts.push(contact);
    }

    editContacts(id, newData) {
        if(!id) return;

        let electContact = this.#contacts.find(elem => elem.id === id);
        if(!electContact) return;
        electContact.edit(newData);
    }

    removeContact(id){
        if(!id) return;
        let newContacts = this.#contacts.filter(elem => elem.id !== id);
        this.#contacts = newContacts;
    }

    getContacts(id){
        if(id > 0) {
            let electContact = this.#contacts.find(elem => elem.id === id);

            // return electContact.getContact();

            return document.write( `<pre>Имя:  <span style="font-style: italic; font-weight: bold;">${electContact.getContact().name}</span>
Фамилия: <span style="font-style: italic; font-weight: bold;">${electContact.getContact().lastName}</span>
Возраст: <span style="font-style: italic; font-weight: bold;">${electContact.getContact().age}</span>
Контактный телефон: <span style="font-style: italic; font-weight: bold;">${electContact.getContact().phoneNumber}</span>
Адрес эл.почты: <span style="font-style: italic; font-weight: bold;">${electContact.getContact().email}</span> 
<br/></pre> `);

        } else if (id <= 0) {
            return alert(`Contact not found. Enter correct value of id`);
        }

        return this.#contacts.forEach(elem => { 

        document.write( `<pre>Имя:  <span style="font-style: italic; font-weight: bold;">${elem.getContact().name}</span> 
Фамилия:  <span style="font-style: italic; font-weight: bold;">${elem.getContact().lastName}</span> 
Возраст:  <span style="font-style: italic; font-weight: bold;">${elem.getContact().age}</span> 
Контактный телефон:  <span style="font-style: italic; font-weight: bold;">${elem.getContact().phoneNumber}</span> 
Адрес эл.почты:  <span style="font-style: italic; font-weight: bold;">${elem.getContact().email}</span> 
<br/></pre> `);
        });
    }
}


const data1 = {
    name: 'Bob',
    lastName: 'Icar',
    age: '44',
    phoneNumber: '+375 29 666-66-66',
    email: 'sunny@gmail.com',
};

const data2 = {
    name: 'Ann',
    lastName: 'Cartoon',
    age: '36',
    phoneNumber: '+375 29 333-33-33',
    email: 'sirius@gmail.com',
};

const data3 = {
    name: 'Katrine',
    lastName: 'Cartoon',
    age: '5',
    phoneNumber: '',
    email: '',
};

const user = new Contacts();
user.add(data1);
user.add(data2);
user.add(data3);
user.editContacts(1,{age: '45', phoneNumber: '+375 29 000-00-00'});
// user.removeContact(1);
user.getContacts();
// user.getContacts(1);
// user.getContacts(2);
// user.getContacts(3);


