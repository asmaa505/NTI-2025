



//?  first Name
// let firstName = "Asmaa";
// let regexFirstName = /^[A-Z][a-z]{3,9}$/;
// console.log(regexFirstName.test(firstName));


//?  last Name
// let lastName = "Maryah";
// let regexlastName = /^[A-Z][a-z]{3,9}$/;
// console.log(regexlastName.test(lastName));


//? phone Number
// let phoneNumber = "01030981331";
// let regexPhoneNumber = /^(01)[0125]\d{8}$/;
// console.log(regexPhoneNumber.test(phoneNumber));


//? birth Date
// let birthDate = "30\/11\/2005";
// let regexBirthDate = /(^0[1-9]|[12][0-9])\/(0[1-9]|(10|11|12))\/\d{4}$/;
// console.log(regexBirthDate.test(birthDate));


//? emial
// let emial = "asmaa@gmail.com";
// let regexEmial = /(^\w{3,9})@[a-z]{3,5}\.[a-z]{2,3}/;
// console.log(regexEmial.test(emial));


//? password
// let pass = "asmaa@12A";
// let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&_])[A-Za-z\d@#$%&_]{8,}$/;
// console.log(regexPass.test(pass));



let regexFirstName = /^[A-Z][a-z]{3,9}$/;
let firstName = document.querySelector(`#fName`);
let ul = document.querySelector(`.ul`);
firstName.addEventListener("input" , ()=>{
    ul.innerHTML = "";
    if(!regexFirstName.test(firstName.value) ){
        ul.innerHTML += `
                            <li>Starts with a capital letter (A–Z)</li>
                            <li>Followed by 3 to 9 lowercase letters (a–z)</li>
                            <li>Total length between 4 and 10 characters</li>
                            <li>Contains only letters</li>
                            <li>No numbers or symbols allowed</li>
                            <li>No spaces allowed</li>
                            <li>Must match the entire word from start to end</li>
                            `
    }else{
        ul.innerHTML += `Valid name`
    }
});


let regexlastName = /^[A-Z][a-z]{3,9}$/;
let lastName = document.querySelector(`#lName`);
let ul2 = document.querySelector(`.ul2`);
lastName.addEventListener("input" , ()=>{
    ul2.innerHTML = "";
    if(!regexlastName.test(lastName.value)){
        ul2.innerHTML += `
                            <li>Starts with a capital letter</li>
                            <li>followed by 3 to 9 lowercase letters</li>
                            <li>total length between 4 to 10 characters</li>
                            <li>only letters allowed, no digits, no special characters, no spaces</li>
                            `
    }else{
        ul2.innerHTML += `Valid name`
    }
})


let regexPhoneNumber = /^(01)[0125]\d{8}$/;
let phone = document.querySelector(`#phone`);
let ul3 = document.querySelector(`.phone`);
phone.addEventListener("input" , ()=>{
    ul3.innerHTML = "";
    if(!regexPhoneNumber.test(phone.value)){
        ul3.innerHTML += `
                            <li> Starts with 01 </li>
                            <li>Followed by one digit from 0, 1, 2, or 5</li>
                            <li>Followed by exactly 8 digits</li>
                            <li>Total length must be 11 digits</li>
                            <li>Only numeric characters allowed</li>
                            <li>Must match the entire string from start to end</li>
                            `
    }else{
        ul3.innerHTML += `Valid Phone number`
    }
})


let regexBirthDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
let BD = document.querySelector("#BD");
let ul4 = document.querySelector(".ul4");

BD.addEventListener("input", () => {
    ul4.innerHTML = "";
    if (!regexBirthDate.test(BD.value)){
        ul4.innerHTML += `
            <li>Month from 01 to 12</li>
            <li>Slash /</li>
            <li>Day from 01 to 31</li>
            <li>Slash /</li>
            <li>Year must be 4 digits</li>
        `;
    }else{
        ul4.innerHTML += `Valid Birthdate`
    }
});


let regexEmail = /^\w{3,9}@[a-z]{3,5}\.[a-z]{2,3}$/;
let Email = document.querySelector(`#email`);
let ul5 = document.querySelector(`.ul5`);

Email.addEventListener("input", () => {
    ul5.innerHTML = "";
    if (!regexEmail.test(Email.value)) {
        ul5.innerHTML += `
            <li>Starts with 3 to 9 characters</li>
            <li>Only letters, digits, and underscores before @</li>
            <li>Then contains @ symbol</li>
            <li>Followed by 3 to 5 lowercase letters (domain name)</li>
            <li>Then a dot .</li>
            <li>Then 2 to 3 lowercase letters (domain extension)</li>
            <li>No spaces or special characters outside of @ and .</li>
        `;
    }else{
        ul5.innerHTML += `Valid Email`
    }
});


let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&_])/;
let pass = document.querySelector(`#pass`);
let ul6 = document.querySelector(`.ul6`);
pass.addEventListener("input" , ()=>{
    ul6.innerHTML = "";
    if(!regexPass.test(pass.value)){
        ul6.innerHTML += `
                            <li>At least one lowercase letter</li>
                            <li>At least one uppercase letter</li>
                            <li>At least one digit</li>
                            <li>At least one special character from @ # $ % & _</li>
                            `
    }else{
        ul6.innerHTML += `Valid password`
    }
});

let confirmPass = document.querySelector(`#confPass`);
let ul7 = document.querySelector(`.ul7`);
confirmPass.addEventListener("input" , ()=>{
    ul7.innerHTML = "";
    if(confirmPass.value !== pass.value){
        ul7.innerHTML += `password doesnt match`
    }else{
        ul7.innerHTML += `Valid Password`
    }
});


let form = document.querySelector(`.form`);
let btn = document.querySelector(`.submit`);
form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    if(!regexFirstName.test(firstName.value)){
        swal.fire({
            icon: "error",
            title: "First Name is Invalid ",
            text: "Please Try agail"
        })
    }


    else if(!regexlastName.test(lastName.value)){
        swal.fire({
            icon: "error",
            title: "Last Name is Invalid ",
            text: "Please Try agail"
        })
    }


    else if(!regexPhoneNumber.test(phone.value)){
        swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Please Try agail"
        })
    }

    else if (!regexBirthDate.test(BD.value)){
        swal.fire({
            icon: "error",
            title: "Invalid Birthdate",
            text: "Please Try agail"
        })
    }

    else if (!regexEmail.test(Email.value)) {
        swal.fire({
            icon: "error",
            title: "Invalid Emil",
            text: "Please Try agail"
        })
    }

    else if(!regexPass.test(pass.value)){
        swal.fire({
            icon: "error",
            title: "Invalid Password",
            text: "Please Try agail"
        })
    }

    else if(confirmPass.value !== pass.value){
        swal.fire({
            icon: "error",
            title: "password doesnt match",
            text: "Please Try agail"
        })
    }

    else if( (!regexFirstName.test(firstName.value)) && 
    (!regexlastName.test(lastName.value))
    (!regexPhoneNumber.test(phone.value))
    (!regexBirthDate.test(BD.value))
    (!regexEmail.test(Email.value))
    (!regexPass.test(pass.value))
    (confirmPass.value !== pass.value)
    ){
        swal.fire({
            icon: "error",
            title: "no input observed",
            text: "please enter the requered values"
        })
    }
    else{
        swal.fire({
            icon: "success",
            title: "Registration Complete!",
            text: "Good Job",
        }) 
    } 
    
    
});