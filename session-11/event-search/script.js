
// !      1.mouse events
// todo           Event	        Description
// click	        User clicks an element
// dblclick	    Double click
// mousedown	    Mouse button pressed
// mouseup	        Mouse button released
// mousemove	    Mouse is moved
// mouseenter	    Mouse enters an element (no bubbling)
// mouseleave	    Mouse leaves an element (no bubbling)
// mouseover	    Mouse enters (bubbles)
// mouseout	    Mouse leaves (bubbles)
// contextmenu	    Right-click (opens context menu)

let button = document.querySelector(`#mouse`);
let h1 = document.querySelector(`#h1`);

// click        //press
// button.addEventListener("click", (e)=>{
//     //!  e.preventDefault();     not important
//     h1.innerHTML += `
//                         asmaa `
// });


// dblclick          double press
// button.addEventListener("dblclick", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// mousedown         press == click
// button.addEventListener("mousedown", (e)=>{
//     // e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });

// mouseup          press == click
// button.addEventListener("mouseup", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// mousemove        touch
// button.addEventListener("mousemove", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// mouseenter
// button.addEventListener("mouseenter", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// mouseleave
// button.addEventListener("mouseleave", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// mouseover == mousesnter
// button.addEventListener("mouseover", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// mouseout     == mouseleave
// button.addEventListener("mouseout", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// contextmenu
// button.addEventListener("contextmenu", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });







//!  2. Keyboard Events
//todo     Event	        Description
//?     keydown	        Any key is pressed down
// ?    keyup	        Key is released
//?     keypress	    Deprecated, use keydown instead


//  keydown        press + keydown
// button.addEventListener("keydown", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// keyup
// button.addEventListener("keyup", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });


// keypress        press + enter
// button.addEventListener("keypress", (e)=>{
//     e.preventDefault();
//     h1.innerHTML += `
//                         asmaa `
// });




//!         3. Form Events
//todo           Event	Description
//?              submit	        Form is submitted
//?              change	        Input loses focus after value change
//?              input	        Value is being typed (live)
//?              focus	        Element gets focus
//?              blur	        Element loses focus
//?              reset	        Form is reset



let inn = document.querySelector(`#inn`);
let ol  = document.querySelector(`#ol`);
let form = document.querySelector(`#f`);

// submit 
form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    // ol.innerHTML += 
    //                 ` <li> ${inn.value} </li> `
});  


//!  change       with  select
// form.addEventListener("change" , (e)=>{
//     e.preventDefault();
//     ol.innerHTML += 
//                     ` <li> ${inn.value} </li> `
// });


// input
// form.addEventListener("input" , (e)=>{
//     e.preventDefault();
//     ol.innerHTML += 
//                     ` <li> ${inn.value} </li> `
// });


//!  focus
// form.addEventListener("focus" , (e)=>{
//     e.preventDefault();
//     ol.innerHTML += 
//                     ` <li> ${inn.value} </li> `
// });


//!  blur
// form.addEventListener("blur" , (e)=>{
//     e.preventDefault();
//     ol.innerHTML += 
//                     ` <li> ${inn.value} </li> `
// });


//  reset     <input type="rese"> 
// form.addEventListener("reset" , (e)=>{
//     e.preventDefault();
//     document.write(`reset form`)
// });
