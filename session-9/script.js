


// let date = new Date();
// console.log(date);

// let month = date.getMonth();
// console.log(month)

// let months = ["jan" , "feb" , "mar" , "apr" , "may" , "jun" , "july" , "aug" , "sep" , "oct" , "nov" , "des"]
// let my_month = months[month]

// let day = date.getDay()
// console.log(day)

// let days = ["sun" , "mon" , "tue" , "wed" , "thu" , "fri" , "sat"];
// let my_day = days[day];



// let year = date.getFullYear()
// console.log(year)


// window.alert(`Day: ${my_day} month: ${my_month}`)


// let products=[
//     {
//         name:"t-shirt",
//         quantity:10,
//         category:"clothes",
//         price:200
//     },
//     {
//         name:"jeans",
//         quantity:20,
//         category:"clothes",
//         price:400
//     },
//     {
//         name:"shoes",
//         quantity:30,
//         category:"shoes",
//         price:600
//     },
//     {
//         name:"laptop",
//         quantity:40,
//         category:"electronics",
//         price:10000
//     },
//     {
//         name:"mobile",
//         quantity:50,
//         category:"electronics",
//         price:8000
//     }
// ]


// products.map( (element)=> {

//     console.log(`name: ${element.name}     quantity: ${element.quantity}`);

// })


let books=[
    {
        name:"book1",
        price:100,
        quantity:10,
        category:"novel",
        year:2002
    },
        {
        name:"book4",
        price:400,
        quantity:40,
        category:"comedy",
        year:2008
    },
    {
        name:"book2",
        price:200,
        quantity:20,
        category:"novel",
        year:2004
    },
    {
        name:"book3",
        price:300,
        quantity:30,
        category:"comedy",
        year:2006
    },
    {
        name:"book5",
        price:500,
        quantity:50,
        category:"novel",
        year:2010
    }

]

// let filterd = books.filter( (ele)=>{

//     //! wrrrrrrrrrrong
//     // if(ele.year > 2004){
//     //     return(ele.name);
//     // }

//     return ele.year > 2004;

//     //? return {ele.year > 2004;}
// })


// filterd.map( (i)=>{
//     console.log(i.name);
// })



let products=[
    {
        name:"t-shirt",
        quantity:10,
        category:"clothes",
        price:200
    },
    {
        name:"pants",
        quantity:20,
        category:"clothes",
        price:300
    },
    {
        name:"jeans",
        quantity:20,
        category:"clothes",
        price:400
    },
    {
        name:"shoes",
        quantity:30,
        category:"shoes",
        price:600
    },
    {
        name:"shoes",
        quantity:30,
        category:"shoes",
        price:600
    },
    {
        name:"laptop",
        quantity:40,
        category:"electronics",
        price:10000
    },
    {
        name:"keyboard",
        quantity:50,
        category:"electronics",
        price:5000
    },
    {
        name:"mobile",
        quantity:50,
        category:"electronics",
        price:8000
    }
]


let clothes = products.filter( (ele)=>  ele.category == "clothes");

let clothes_total = clothes.reduce( (total , i)=>{
    return( total += i.quantity ) 

} , 0 )
console.log(`clothes_total: ${clothes_total}`)






let electronics = products.filter( (ele)=>  ele.category == "electronics");

let electronics_total = electronics.reduce( (total , i)=>{
    return( total += i.quantity ) 

} , 0 )

console.log(`electronics_total: ${electronics_total}`)







let shoes = products.filter( (ele)=>  ele.category == "shoes");

let shoes_total = shoes.reduce( (total , i)=>{
    return( total += i.quantity ) 

} , 0 )

console.log(`shoes_total: ${shoes_total}`)







