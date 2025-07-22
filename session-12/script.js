

// function getData(){
//     fetch('https://dummyjson.com/recipes')
//     .then( (result)=> result.json() )
//     .then( (json_trans)=>{
//         // console.log(json_trans);
//         let respons = json_trans.recipes;
//         console.log(json_trans.recipes);

        
//         respons.map( (r)=>{
//             let card = document.querySelector(`.card`);
//             let li   = r.map( (i)=>{
//                 return `<li> ${r.i} </li>`
//             } )
//             card.innerHTML += `
//                                 <div>
//                                     <img src="${r.image}">
//                                     <h3>${r.name}</h3>
//                                     <ol> ${li.join("")}</ol>
                                    
//                                 </div>`

//         })

//     })
// }

// getData();






// function getData(link) {
    
//     fetch(link);
//     .then((result) => result.json())
//     .then((json_trans) => {
//         let recipes = json_trans.recipes;
//         let cardsContainer = document.querySelector(".card");

//         recipes.map((recipe) => {
//         let li = recipe.ingredients.map((i) => {
//             return `<li>${i}</li>`;
//         });

//         cardsContainer.innerHTML += `
//             <div class="s">
//                 <img src="${recipe.image}" alt="${recipe.name}">
//                 <h3>${recipe.name}</h3>
//                 <ol>${li.join("")}</ol>
//                 <button>Buy now</button>
//             </div>
//         `
//         });
//     });

// }
// getData('https://dummyjson.com/recipes');




// let inn = document.querySelector(`.input`);

// inn.addEventListener("input" , ()=>{
//     recipes.innerHTML = "";
//     fetch('https://dummyjson.com/recipes/search?q=')
//     .then((result) => result.json())
//     .then((json_trans) => {
//         let recipes = json_trans.recipes;
//         let cardsContainer = document.querySelector(".card");

//         recipes.map((recipe) => {
//         let li = recipe.ingredients.map((i) => {
//             return `<li>${i}</li>`;
//         });

//         cardsContainer.innerHTML += `
//         <div class="s">
//             <img src="${recipe.image}" alt="${recipe.name}">
//             <h3>${recipe.name}</h3>
//             <ol>${li.join("")}</ol>
//             <button>Buy now</button>
//         </div>
//     `
//     });
// });

// })













// let cardsContainer = document.querySelector(".card");
// let inn = document.querySelector(".input");

// function displayRecipes(recipes) {
//     cardsContainer.innerHTML = ""; 

//     recipes.forEach((recipe) => {
//         let li = recipe.ingredients.map((i) => `<li>${i}</li>`).join("");

//         cardsContainer.innerHTML += `
//             <div class="s">
//                 <img src="${recipe.image}" alt="${recipe.name}">
//                 <h3>${recipe.name}</h3>
//                 <ol>${li}</ol>
//                 <button>Buy now</button>
//             </div>
//         `;
//     });
// }

// function getData(link) {
//     fetch(link)
//         .then((result) => result.json())
//         .then((json_trans) => {
//             allRecipes = json_trans.recipes;
//             displayRecipes(allRecipes);
//         });
// }


// getData("https://dummyjson.com/recipes");


// inn.addEventListener("input", () => {
//     let searchText = inn.value.toLowerCase();

//     let filtered = allRecipes.filter((r) =>
//         r.name.toLowerCase().includes(searchText)
//     );

//     displayRecipes(filtered);
// });







let gmail = "asmaa@gmailcom";
let gmailRegex = /^[a-z][a-z0-9]{2,20}(@gmailcom)$/;
console.log(gmailRegex.test(gmail));