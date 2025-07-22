// let request = new XMLHttpRequest();
// let sec = document.querySelector("#s");


// request.open("GET" , "https://dummyjson.com/products" , true);
// request.onload = ()=>{
//     if(request.status == 200 && request.readyState == 4){
//         let respone = JSON.parse(request.responseText);
//         let products = respone.products;

//         products.map((product)=>{
//             sec.innerHTML += `
//                                         <div class="card">
//                                             <img src="${product.thumbnail}">
//                                             <h3>${product.title}</h3>
//                                             <P>${product.description}</P>
//                                             <p>price: ${product.price}</p>
//                                             <button>viwe more</button>
//                                         </div>`
//         })
//     }
// }
// request.send();












let section = document.querySelector("#s");

function getData(link) {
    section.innerHTML = ""; 
    let r = new XMLHttpRequest();
    r.open("GET", link, true);

    r.onload = function () {
        if (r.readyState === 4 && r.status === 200) {
            let data = JSON.parse(r.responseText);
            let allProducts = data.products;

            allProducts.map((product) => {
                section.innerHTML += `
                    <div class="card">
                        <img src="${product.thumbnail}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <span>Price: $${product.price}</span>
                        <button>view more</button>
                    </div>
                `;
            });
        }
    };

    r.send();
}

getData("https://dummyjson.com/products");



let categorySec = document.querySelector(".cat");
let catRequest  = new XMLHttpRequest();

catRequest.open("GET", "https://dummyjson.com/products/categories", true);

catRequest.onload = function(){
    if (catRequest.readyState === 4 && catRequest.status === 200) {
        let categories = JSON.parse(catRequest.responseText);

        categories.map((category)=>{
            categorySec.innerHTML += `
                <span class="cat-style" onclick="getData('${category.url}')">   ${category.name}
                </span>
            `;
        });
    }
};

catRequest.send();


