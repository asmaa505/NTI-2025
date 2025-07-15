
// for(let i = 10 ; i > 0 ; i--){
//     console.log(i);
// }



// //?     get number of iteration from user
// let num = Number(window.prompt("emter a number"))


// //?     elements container
// let arr = [];          


// //?      get names from user
// for(let  i = 0; i < num ; i++){
//     let name = window.prompt("enter a name");
//     arr.push(name)
// }


// //?     print elements one by one
// // for(let  i = 0; i < num ; i++){
// //     console.log(arr[i])
// // }
// document.write(arr.join(" <br> "));



// let pass = 123;
// let tries = 3;

// do{
//     password = window.prompt("enter your password")
//     if(password == pass || tries == 1){
//         console.log("correct password");
//         break;
//     }else{
//         console.log("wrong passord");
//     }
//     tries --;
//     window.alert(`you have only ${tries}`);
// }while( tries <= 3)





let rand_num;
do{
    let rand = Math.random() * 10;
    rand_num = Math.round( rand );

    if(rand_num == 5){
        window.alert(" correct try!");
        break;
    }else if(rand_num > 5){
        window.alert(`${rand_num} greater than 5, please try again`)
    }else{
        window.alert(`${rand_num} smaller than 5, please try again`)
    }
}while (true)