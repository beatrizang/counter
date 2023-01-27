let count = 0;
let number = document.getElementById('number');

document.getElementById("btn_decrease").addEventListener('click',() => {
    count--;
    number.innerHTML = count;
    if(count<0){
        number.style.color = "var(--red)";
    }
});

document.getElementById("btn_reset").addEventListener('click',() =>{
    count = 0;
    number.innerHTML = count;
    number.style.color = "aliceblue";
})

document.getElementById("btn_increase").addEventListener('click', () =>{
    count++;
    number.innerHTML = count;
    if(count>0){
        number.style.color = "var(--green)";
    }
})

