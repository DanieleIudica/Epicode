// interfaccia smartphone
interface ISmartphone {
    carica: number;
    numeroChiamate: number;
}
// classe user che implementa l'interfaccia smartphone
class User implements ISmartphone { 
    carica: number = 0;
    numeroChiamate: number = 0
    // utente
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string, numeroChiamate: number, carica: number) {
        this.firstName = firstName;
        this.lastName = lastName; 
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    // metodo ricarica
    ricarica(unaRicarica: number): void{
       this.carica += unaRicarica
    }
    // metodo che calcola costo chiamata, sottrae dal totale ricarica e alza il contatore chiamate
    chiamata(minutiDurata: number): void{
        let costoChiamata = minutiDurata * 0.2
        this.carica -= costoChiamata
        this.numeroChiamate++
    }
    // metodo check ricarica
    numero404(): number {
        return this.carica
    }
    // metodo check numero chiamate
    getNumeroChiamate(): number{
        return this.numeroChiamate
    }
    // metodo azzera numero chiamate
    azzeraChiamate(): void{
        this.numeroChiamate = 0
    }
}

// definizione degli utenti
const FirstUser = new User('Daniele','Iudica', 10, 5)
const SecondUser = new User('Jack','Black', 3, 0)
const ThirdUser = new User('Maria','Rossi', 1, 50)
// clg degli utenti alla situazione iniziale
console.log(`utenti alla situazione iniziale:`);
console.log(`Il sig. ${SecondUser.firstName} ${SecondUser.lastName}, ha effettuato ${SecondUser.getNumeroChiamate()} chiamate e ha un credito di ${SecondUser.numero404()} €`);
console.log(`la sig. ${ThirdUser.firstName} ${ThirdUser.lastName}, ha effettuato ${ThirdUser.getNumeroChiamate()} chiamate e ha un credito di ${ThirdUser.numero404()} €`);
console.log(`_____________________________________`);
console.log(`utente principale alla situazione iniziale:`);
console.log(`${FirstUser.firstName} ${FirstUser.lastName}, hai effettuato ${FirstUser.getNumeroChiamate()} chiamate e hai un credito di ha un credito di ${FirstUser.numero404()} €`);

// chek metodi sugli utenti secondari
SecondUser.ricarica(15)
ThirdUser.chiamata(7)
// FirstUser.azzeraChiamate()



let btnRicarica1 = document.querySelector(".ricarica1")
let btnRicarica2 = document.querySelector(".ricarica2")
let btnRicarica3 = document.querySelector(".ricarica3")
let azzera = document.querySelector(".azzera")
let chiamata = document.querySelector(".chiamata")
let credito = document.querySelector(".credito")

// bottone ricarica daniele
if (btnRicarica1 !== null) {
    btnRicarica1.addEventListener("click", () => {
    FirstUser.ricarica(10)
    alert(`Daniele, hai un nuovo saldo di: ${FirstUser.numero404()} €`);
    let primo = document.querySelector(".firstUser");
if (primo !== null) {
    primo.innerHTML = `<p><span>${FirstUser.firstName} ${FirstUser.lastName}</span>, hai effettuato <span>${FirstUser.getNumeroChiamate()}</span> chiamate e hai un credito di <span>${FirstUser.numero404()} €</span></p>`;
}
 })
}

// bottone ricarica jack
if (btnRicarica2 !== null) {
    btnRicarica2.addEventListener("click", () => {
    SecondUser.ricarica(10)
    alert(`Jack, ha un nuovo saldo di: ${SecondUser.numero404()} €`);
    let secondo = document.querySelector(".secondUser");
if (secondo !== null) {
    secondo.innerHTML = `<p>Il sig. <span>${SecondUser.firstName} ${SecondUser.lastName}</span>, ha effettuato <span>${SecondUser.getNumeroChiamate()}</span> chiamate e ha un credito di <span>${SecondUser.numero404()} €</span></p>`;
}
 })
}

// bottone ricarica maria
if (btnRicarica3 !== null) {
    btnRicarica3.addEventListener("click", () => {
    ThirdUser.ricarica(10)
    alert(`Maria, ha un nuovo saldo di: ${ThirdUser.numero404()} €`);
    let terzo = document.querySelector(".thirdUser");
if (terzo !== null) {
    terzo.innerHTML = `<p>la sig. <span>${ThirdUser.firstName} ${ThirdUser.lastName}</span>, ha effettuato <span>${ThirdUser.getNumeroChiamate()}</span> chiamate e ha un credito di <span>${ThirdUser.numero404()} €</span></p>`;
}
 })
}

// bottone azzera chiamate
if (azzera !== null) {
    azzera.addEventListener("click", () => {
    FirstUser.azzeraChiamate()
    alert(`${FirstUser.firstName} ${FirstUser.lastName}, le tue chiamate sono state azzerate.`);
    let primo = document.querySelector(".firstUser");
if (primo !== null) {
    primo.innerHTML = `<p><span>${FirstUser.firstName} ${FirstUser.lastName}</span>, hai effettuato <span>${FirstUser.getNumeroChiamate()}</span> chiamate e hai un credito di <span>${FirstUser.numero404()} €</span></p>`;
}
 })
}

// chiama 404
if (credito !== null) {
    credito.addEventListener("click", () => {   
    alert(`${FirstUser.firstName} ${FirstUser.lastName}, hei un credito residuo di ${FirstUser.numero404()} €.`);
    let primo = document.querySelector(".firstUser");
if (primo !== null) {
    primo.innerHTML = `<p><span>${FirstUser.firstName} ${FirstUser.lastName}</span>, hai effettuato <span>${FirstUser.getNumeroChiamate()}</span> chiamate e hai un credito di <span>${FirstUser.numero404()} €</span></p>`;
}
 })
}

// bottone effettua chiamata
if (chiamata !== null) {
    chiamata.addEventListener("click", () => {
    if (FirstUser.numero404() >= 1) {
       FirstUser.chiamata(5)
       alert(`${FirstUser.firstName} ${FirstUser.lastName}, hai effettuato una chiamata di 5 minuti ad un costo di 0,20 € al minuto.`);    
    } else {
        alert('non hai credito sufficiente per effettuare la chiamata, fai una ricarica!') 
    }
    let primo = document.querySelector(".firstUser");
if (primo !== null) {
    primo.innerHTML = `<p><span>${FirstUser.firstName} ${FirstUser.lastName}</span>, hai effettuato <span>${FirstUser.getNumeroChiamate()}</span> chiamate e hai un credito di <span>${FirstUser.numero404()} €</span></p>`;
}
 })
}

// lista utenti
let primo = document.querySelector(".firstUser");
if (primo !== null) {
    primo.innerHTML = `<p><span>${FirstUser.firstName} ${FirstUser.lastName}</span>, hai effettuato <span>${FirstUser.getNumeroChiamate()}</span> chiamate e hai un credito di <span>${FirstUser.numero404()} €</span></p>`;
}
let secondo = document.querySelector(".secondUser");
if (secondo !== null) {
    secondo.innerHTML = `<p>Il sig. <span>${SecondUser.firstName} ${SecondUser.lastName}</span>, ha effettuato <span>${SecondUser.getNumeroChiamate()}</span> chiamate e ha un credito di <span>${SecondUser.numero404()} €</span></p>`;
}
let terzo = document.querySelector(".thirdUser");
if (terzo !== null) {
    terzo.innerHTML = `<p>la sig. <span>${ThirdUser.firstName} ${ThirdUser.lastName}</span>, ha effettuato <span>${ThirdUser.getNumeroChiamate()}</span> chiamate e ha un credito di <span>${ThirdUser.numero404()} €</span></p>`;
}

// nascondi modale
let modalBtn = document.querySelector(".modalBtn");
let modal = document.querySelector(".modal");

modalBtn!.addEventListener("click", function () {
    modal!.classList.add("hide");
    console.log('ciao');
})