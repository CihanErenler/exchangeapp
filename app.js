const http = new Http();

const sel = document.getElementById('firstcurrency');
const selSec = document.getElementById('secondcurrency');
const firstInput = document.getElementById('first-currency');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const resolt = document.getElementById('resolt')
const button = document.querySelector('.button');

firstInput.addEventListener('keyup', () => {
    if(firstInput.value === ""){
        resolt.value = "";
    }else{
        const opt = sel.value;
        const optSec = selSec.value;
        getData(opt,optSec);
    }
})

sel.addEventListener('change', () => {
    if(firstInput.value !== ""){
        const opt = sel.value;
        const optSec = selSec.value;
        getData(opt,optSec)
        first.textContent = opt;
    }else{
        const opt = sel.value;
        first.textContent = sel.value;
        resolt.value = "";
    }
})

selSec.addEventListener('change', () => {
    if(firstInput.value !== ""){
        const opt = sel.value;
        const optSec = selSec.value;
        second.textContent = optSec;
        getData(opt,optSec)
    }else{
        const optSec = selSec.value;
        second.textContent = optSec;
        resolt.value = "";
    }
})

button.addEventListener('click', () => {
    const opt = sel.value;
    const optSec = selSec.value;

    if(firstInput.value !== ""){
        sel.value = optSec;
        selSec.value = opt;
        getData(optSec,opt);
    }else{
        sel.value = optSec;
        selSec.value = opt;

        first.textContent = optSec;
        second.textContent = opt;
    }
})


function getData(opt,optSec){

    http.get(opt)
    .then(resolve => {
        
        for(let x in resolve.rates){
            if(optSec === x){
                let res = resolve.rates[x] * firstInput.value;
                resolt.value = res.toFixed(4);
            }
        }
    })
    .catch(err => console.log(err))

}