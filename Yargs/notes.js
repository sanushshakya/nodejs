const fs = require('fs');
const encryptPass = require('crypto-js');

const addDetails = (name, email, password, address) => {
    const inputDetails = ({
        email,
        password,
    });

    const hash = encryptPass.AES.encrypt(JSON.stringify(inputDetails.password), 'key=123').toString();

    const detailsBuffer = fs.readFileSync('detail.json');
    const fileDetails = JSON.parse(detailsBuffer);
    let filterEmail = 'Email';
    for(let i in fileDetails){
      if(inputDetails.email === fileDetails[i].email){
            filterEmail = 'Exists';
        }
    }

    if(filterEmail === 'Email'){
        const inputDetails1 = ({
            "name": name,
            "email": email,
            "password": hash,
            "address": address
        });
        fileDetails.push(inputDetails1);
        fs.writeFileSync('detail.json', JSON.stringify(fileDetails));
        console.log('Successfully user added.')
    }
    else{
        return console.log('Email Exists');
    }
    // console.log(inputDetails);
    // fs.writeFileSync('detail.json', JSON.stringify(inputDetails));
    // console.log(filterEmail) 
}

const loadDetails = () => {
    try {
        const detailsBuffer = fs.readFileSync('detail.json');
        const listDetails = JSON.parse(detailsBuffer.toString());
        for(let i in listDetails){
            console.log(
                "Name:",listDetails[i].name,
                "Email:",listDetails[i].email,
                "Address:",listDetails[i].address
            )};
       
    }catch(error){
        return 'error'
    }
}

const readDetails = (email) => {
    try{
        const detailsBuffer = fs.readFileSync('detail.json');
        const listDetails = JSON.parse(detailsBuffer.toString());
        for(let i in listDetails){
            if(email === listDetails[i].email){
                console.log(
                    "Name:",listDetails[i].name,
                    "Email:",listDetails[i].email,
                    "Address:",listDetails[i].address
                )
            }
            // else
            // return console.log('user not found.')
        }
    }catch(error){
        return 'error'
    }
}

const deleteDetails = (email) => {
    try{
        const detailsBuffer = fs.readFileSync('detail.json');
 
        const listDetails = JSON.parse(detailsBuffer.toString());
        for(let i in listDetails){
            if(email === listDetails[i].email){
             delete listDetails[i].name ; 
             delete listDetails[i].email ; 
             delete listDetails[i].password ; 
             delete listDetails[i].address ;  
            }
        }
        fs.writeFileSync('detail.json', JSON.stringify(listDetails));  
        console.log('Successfully user deleted.')
        
    }catch(error){
        return 'error'
    }
}

const updateDetails = (name, email, password, address) => {
    try{
        const detailsBuffer = fs.readFileSync('detail.json');
        const listDetails = JSON.parse(detailsBuffer.toString());

        const hash = encryptPass.AES.encrypt(JSON.stringify(password), 'key=123').toString();

        for(let i in listDetails){
            if(email === listDetails[i].email){
                listDetails[i].name = name;
                listDetails[i].password = hash;
                listDetails[i].address = address;
                fs.writeFileSync('detail.json', JSON.stringify(listDetails));  
                console.log('Successfully user updated.')
            }
          
        }
    }catch(error){
        return 'error'
    }   
}

module.exports = {
    addDetails,
    loadDetails,
    readDetails,
    deleteDetails,
    updateDetails 
}