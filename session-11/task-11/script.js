// Input
let id     = document.querySelector(`#i1`);
let name   = document.querySelector(`#i2`);
let course = document.querySelector(`#i3`);
let phone  = document.querySelector(`#i4`);
let submit = document.querySelector(`#btn-1`);
let cancel = document.querySelector(`#btn-2`);

// Database
let tbody  = document.querySelector(`#tbody`);

submit.addEventListener("click" , (e)=>{
    e.preventDefault();
    tbody.innerHTML += `
                        <tr>
                            <td> ${id.value}     </td>
                            <td> ${name.value}   </td>
                            <td> ${course.value} </td>
                            <td> ${phone.value}  </td>
                            <td> <i class="fa-solid fa-xmark"></i></td>
                        </tr>
                        `
    id.value     = "";
    name.value   = "";
    course.value = "";
    phone.value  = "";
});

cancel.addEventListener("click" , (e)=>{
    e.preventDefault()
    id.value     = "";
    name.value   = "";
    course.value = "";
    phone.value  = "";
});

tbody.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(e.target.classList.contains(`fa-solid`)){
        e.target.closest("tr").remove();
    }
});

let reset = document.querySelector(`.reset`);
reset.addEventListener("click" , (e)=>{
    e.preventDefault();
    tbody.innerHTML = "";
});
