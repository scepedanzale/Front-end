
// esercizio 1
let save = document.querySelector('#save');
save.addEventListener('click', (e)=>{
    let nome = document.querySelector('input').value;
    let p = document.createElement('p');
    let div = document.querySelector('#list');
    p.innerHTML = nome;
    div.appendChild(p);

    localStorage.setItem('nome', nome);
    document.querySelector('input').value='';

    e.preventDefault();
});

let elimina = document.querySelector('#delete');
elimina.addEventListener('click', ()=>{
    let div = document.querySelector('#list');
    div.removeChild(div.lastChild)
    localStorage.removeItem('nome')
})


// esercizio 2

/* let i= 0;
let attuale = sessionStorage.getItem("count")
setInterval(function(){
    localStorage.setItem("count", i++)
    sessionStorage.setItem("count", attuale++);
    let timer = document.querySelector('p span');
    timer.innerHTML = attuale;
},1000);


 */


let contatore= sessionStorage.getItem('contatore') || 0;
setInterval(() => {
    let span = document.querySelector('.timer p span');
    span.innerHTML = contatore;
    contatore++;
    sessionStorage.setItem('contatore', contatore);
}, 1000);