


let countEl = document.getElementById("counter")

let count = 0

function increment(){
    count =count + 1;
    countEl.innerHTML = count
   
}

function save(){
    console.log(count)
}