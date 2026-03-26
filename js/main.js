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

console.log("Drugi nacin");

console.log(voce.map(function(element){
    return element.length;
}));


// IIFE koncept nad anonimnim funkcijama
(function(name){
    console.log("Pozdrav iz IIFE sa sajta ", name);
})(naziv);
