   /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
            let title = document.querySelector('h1');
            title.innerText = 'Questo titolo è modificato da JavaScript';
       }
       changeTitle();

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
            let title = document.querySelector('h1');
            title.className = 'myHeading';
       }
       addClassToTitle();
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
           let p = document.querySelectorAll('div > p');
           p.forEach(paragraph =>{
               paragraph.innerText = 'Testo dei paragrafi figli dei div modificato da JS'
            }
           )
       }
       changePcontent();
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
        const changeUrls = function () {
            let link = document.querySelectorAll('a:not(footer a)');
            link.forEach(
                function(l){
                    l.href = 'https://www.google.com';
                }
            )
        }
        changeUrls();
        console.log(window.document)  


       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {
            let ul2 = document.querySelector('#secondList');
            let li = document.createElement('li');
            li.innerText = '4th';
            ul2.appendChild(li);
       }
       addToTheSecond();
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
            let div = document.querySelector('div');
            let p = document.createElement('p');
            p.innerText = 'Nuovo paragrafo nel primo div creato con JS';
            div.appendChild(p);
       }
       addParagraph();
       
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {
            let ul1 =document.querySelector('#firstList')
            //ul1.style.display = 'none';
            //ul.remove();
       }
       hideFirstUl()
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
            let ul = document.querySelectorAll('ul');
            ul.forEach(
                function(ul){
                    ul.style.backgroundColor = 'green';
                }
            )
       }
       paintItGreen() 
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
        const makeItClickable = function () {
            let h1 = document.querySelector('h1');
            h1.innerText = h1.innerText.slice(0,-1)
       } 
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
            let linkFooter = document.querySelector('footer a');
            let txt = linkFooter.href; 
            alert(txt)
       }
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {
            let element = document.querySelector('#tableArea')
            let table = document.createElement('table');
            element.appendChild(table)
            let tr = document.createElement('tr')
            table.appendChild(tr)
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');
            th1.innerText = 'Immagine'
            th2.innerText = 'Nome prodotto'
            th3.innerText = 'Quantita'
            th4.innerText = 'Prezzo'
            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
            tr.appendChild(th4)

       }
       generateTable()
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {
            let tr = document.createElement('tr');
            let table = document.querySelector('table');
            table.appendChild(tr);

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            td1.innerText = 'immagine'
            td2.innerText = 'nome'
            td3.innerText = 'quantita'
            td4.innerText = 'prezzo'
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
       }
       addRow()
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {
            let th = querySelector('')
       }
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
       

       const changeColorWithRandom = function () {
            var hex = '0123456789ABC'.split('');
            var color = '#';
            for (i = 0; i < 6; i++) {
                color = color + hex[Math.floor(Math.random() * 13)];
            }
            let h2 = document.querySelector('#changeMyColor');
            h2.style.color = color;
       }

 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}
     