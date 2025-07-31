



let student =
{
    name : "asmaa",
    age  : "20",
    college : "Computer Science and Artificial Intelligance"
};


localStorage.setItem("person" ,JSON.stringify(student));
let storage = localStorage.getItem("person");
console.log(JSON.parse(storage));