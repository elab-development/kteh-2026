// Eksterni JavaScript
console.log("Ovo je eksterni JS fajl!");

naziv = "Dream Lang";
console.log(naziv);

// Nacini definisanja promenljivih u JS - var, let, const
let a = 20;
a = 30;
// let a = 40;
let b = 10;
console.log("Zbir a i b je: ", a+b);

// hoisting promeljivih
console.log("Promenljiva grad nije definisana:", grad === undefined);
var grad  = "Beograd";
console.log(grad);

// striktne i slabe jednakosti
let c = "10 ";
console.log(b==c);
console.log(b===c);

// kontrola toka podataka - if, if else, switch
let temperatura = 22;
if (temperatura > 25) {
    console.log("Napolju je toplo");
} else if (temperatura >15){
    console.log("Napolju je prijatno");
}
else{
    console.log("Napolju je hladno");
}

// nizovi
const voce = ['jabuka', 'banana', 'jagoda','kivi'];
// console.log(voce);

// petlje - for, forEach , for of, for in, while, do while
for(let i = 0; i<voce.length;i++){
   
    console.log("Ispis elemenata u nizu:",voce[i]);
}

// for of | for in 
for(const v of voce){
    console.log(v);
}

for(const vo in voce){
    // if(vo == 2) break;
    if(vo ==2) continue;
    console.log(vo);
}


// Funkcije 
function PotvrdaForme(){
    alert("Uspesno ste popunili formu, u najkracem roku potrudicemo se da Vam odgovorimo.");
}

//funkcija sa argumentima
function prognoza(temp){
    if (temp > 25) {
    console.log("Napolju je toplo");
} else if (temp >15){
    console.log("Napolju je prijatno");
}
else{
    console.log("Napolju je hladno");
}
}
prognoza(temperatura);


// povratne funkcije
function saberi(a,b){
    return a+b;
}
console.log(saberi(5,7));

const mnozenje = function(a,b){
    return a*b;
}

// --- GLOBALNI OPSEG ---
var globalnaVar = "Ja sam var";
let globalnaLet = "Ja sam let";
const globalnaConst = "Ja sam const";

if (true) {
    // --- BLOK OPSEG (Unutar zagrada) ---
    var unutarVar = "VAR: Ja sam pobegao iz bloka!"; 
    let unutarLet = "LET: Ja sam ostao u bloku.";
    const unutarConst = "CONST: I ja sam ostao u bloku.";

    console.log("Unutar bloka:");
    console.log(unutarVar);   // Radi
    console.log(unutarLet);   // Radi
    console.log(unutarConst); // Radi

    globalnaLet = "Novi Let";       // DOZVOLJENO: let se može menjati
    // globalnaConst = "Novi Const"; 
}

console.log("--- VAN BLOKA ---");

console.log(unutarVar); 
// console.log(unutarLet);   // GREŠKA: ReferenceError - let je vidljiv samo unutar {}
// console.log(unutarConst); // GREŠKA: ReferenceError - const je vidljiv samo unutar {}

console.log("Globalne posle bloka:", globalnaLet); // Ispisuje "Novi Let"
console.log("Globalne posle bloka:", globalnaConst); // Ispisuje "Ja sam const"
console.log("Globalne posle bloka:", globalnaVar); // Ispisuje "Ja sam var"


// Arrow funkcije  () => {} 
const oduzmi = (b1,b2) => { 
    return b1-b2;
}
console.log(oduzmi(10,7));

const kvadrat = x => {
    return x*x;
}
console.log(kvadrat(5))

//primer iz skripte
console.log(voce.map(v => v.length));

// IIFE koncept nad anonimnim funkcijama - 
(function(name){
    console.log("Pozdrav iz IIFE sa sajta ", name)
}(naziv));

// --- 1. SELEKTORI (DOM Manipulation) ---

// getElementById za naslov
const naslov = document.getElementById("naslov-kontakta");
console.log(naslov);

// querySelector za formu 
const forma = document.querySelector("#kontakt");
console.log(forma);

// querySelectorAll - vraća NodeList svih inputa
const sviInputi = document.querySelectorAll("input");
console.log(sviInputi);

// getElementsByTagName - vraća HTMLCollection svih inputa
const inputiTag = document.getElementsByTagName("input");
console.log(inputiTag);

// Promena HTML sadržaja 
naslov.textContent = "Pošaljite nam poruku";

// Promena CSS propertija kroz JS
naslov.style.color = "brown";
naslov.style.textTransform = "uppercase";

// Postavljanje atributa kroz JS 
const poljeIme = document.getElementById("ime");
poljeIme.setAttribute("placeholder", "Unesite vaše ime...");


// --- 3. EVENT LISTENERI ---
const tabelaBody = document.querySelector("#tabela-korisnika tbody");

// EventListener za dodavanje korisnika
forma.addEventListener("submit", function(event) {
    // Sprečavamo osvežavanje stranice
    event.preventDefault();

    // Uzimanje vrednosti iz polja
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    // Kreiranje novog reda u tabeli
    const noviRed = document.createElement("tr");

    noviRed.innerHTML = `
        <td>${ime}</td>
        <td>${email}</td>
        <td>${poruka}</td>
        <td><button class="btn-obrisi">Obriši</button></td>
    `;

    // Dodavanje reda u tbody
    tabelaBody.appendChild(noviRed);

    // Resetovanje forme nakon slanja
    forma.reset();
    
    alert("Korisnik uspešno dodat u tabelu!");
});


