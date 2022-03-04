let countEl = document.getElementById("counter")
let saveEl = document.getElementById("paragraph")

let count = 0

function increment(){
    count += 1;
    countEl.innerHTML = count
   
}

function save(){
    let counting = count + " - "
    saveEl.textContent += counting
    countEl.innerHTML = count
    count = 0
}



