let head = document.getElementById("h");
console.log(head);

let par = document.getElementsByClassName("pr");
console.log(par);

let tagg = document.getElementsByClassName("h1")
console.log(tagg)



let all = document.querySelectorAll("p");
console.log(all)


let b = document.querySelector(`.b`);
// b.innerHTML = `<h2> mirit </h2>`;
// b.innerHTML += `<p>lorem10</p>`;

b.innerHTML = ` <h2 class="bb">mirit</h2> 
                <p>lorem10</p> `



let image = document.querySelector(`img`);
function hello(){
    image.src = "././images/hello.jpg"
}
function q(){
    image.src = "./images/q.jpg"
}
function origin(){
    image.src = "./images/1.jpg"
}






let inn = document.querySelector(`#in`);
let butt = document.querySelector(`#butt`);
let form = document.querySelector(`#form`);
let ol = document.querySelector(`#ol`);

form.addEventListener("submit" , ( e )=>{
    console.log(e);
    e.preventDefault();

    ol.innerHTML +=
        ` <li> ${inn.value} </li>`;

    inn.value = "";
})
