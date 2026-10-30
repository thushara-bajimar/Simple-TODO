let inpt = document.querySelector("input");
let btn = document.querySelector("button");
// let lists = document.querySelectorAll("li");
let ul = document.querySelector("ul");
// let item = document.createElement("li");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.classList.add("list-group-item", "d-flex", "align-items-center");
    item.innerText = inpt.value;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("del", "btn", "btn-outline-danger", "btn-sm", "ms-auto");

    ul.appendChild(item);
    item.appendChild(del);

    inpt.value = "";
})

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let lstItem = event.target.parentElement;
        lstItem.remove();
    }
})

// let delbtns = document.querySelectorAll(".del");

// for(let delbtn of delbtns){
//     delbtn.addEventListener("click", function() {
//         let par = delbtn.parentElement;
//         par.remove();
//     })
// }