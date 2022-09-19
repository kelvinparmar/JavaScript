
let counter = document.getElementById("count"); 
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
    count++;
    counter.innerText = count;
}

function save(){
    let countstr = " " + count + "-";
    saveEl.innerText += countstr;
    counter.textContent = 0;
    count = 0;
}

