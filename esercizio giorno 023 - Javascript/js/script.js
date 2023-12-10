let url = 'https://striveschool-api.herokuapp.com/books';
let obj = [];
let carrello = [];

// Chiamata AJAX
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
        let libri = xhr.responseText;
        obj = JSON.parse(libri)
        createCard(obj)
    }
}


// Funzione creazione cards
function createCard(obj){
    let row = document.querySelector('.books .row');
    for(let i = 0; i<obj.length; i++){
        let div = document.createElement('div');
        row.appendChild(div);
            div.innerHTML=`
                <div class="col-6 col-md-4 col-lg-2 w-100 shadow">
                    <div class="card">
                        <img src="${obj[i].img}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${obj[i].title}</h5>
                            <p class="card-text">${obj[i].category}</p>
                            <p class="card-text">${obj[i].price}</p>
                            <button type="button" class="btn btn-danger">Scarta</button>
                            <button type="button" class="btn btn-warning">Aggiungi al carrello</button>
                            
                        </div>
                    </div>
                </div> `

                // Pulsante eliminazione
                let btnDelete = document.querySelectorAll('.btn-danger');
                btnDelete[i].addEventListener('click', (b) => {
                    b.target.parentNode.parentNode.parentNode.classList.add("d-none")
                })


                // Pulsante aggiunta al carrello
                let btnAdd = document.querySelectorAll('.btn-warning');
                btnAdd[i].addEventListener('click', (b) => {
                    let ul = document.querySelector('nav ul');
                    let li = document.createElement('li');
                    li.className.add= "py-3";
                    let libro = obj[i].title
                    li.innerHTML = libro;
                    ul.appendChild(li);
                    carrello.push(libro)
                    console.log(carrello)
                })
    }
}
