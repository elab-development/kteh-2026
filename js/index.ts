//node -v - provera instalacije nodejs-a
//npm -v - provera instalacije npm-a
//npm install -g typescript
//tsc -v - provera instalacije typescript compailer

//Komande u terminalu
// tsc index.ts - kompajliranje u js fajl
// node index.js - ispisi u terminalu js fajla

// let, var, const - definisanje promenljivih
let  prom1:number = 10;
//clg
console.log(prom1);

// primitivni tipovi podataka
let prom2: string = "ovo je string promenljiva";
console.log(typeof prom2);

// any tip podataka
let prom3:any = "ovo je any promenljiva";
prom3 = 30;
console.log(prom3);

let prom4:boolean = true;
// prom4 = "Ovo je neka nova vrednost"; // greska, jer je tip promenljive boolean

let niz: number[] = [1,2,3]; 
// niz.push("novi clan niza"); // greska, jer su clanovi niza tipa number
niz.push(4);

// tuple tip podataka
let tuple : [number,string,boolean] = [4,"ovo je drugi clan", true];
console.log(tuple[1]);

// enum 
enum Boja {
    Crvena,
    Plava,
    Zuta
};
let boja:Boja = Boja.Zuta;

//FUNKCIJE

// 1. imenovane funkcije bez povratne vrednosti
function ispisiPoruku(poruka:string):void{
    console.log(poruka);
}
ispisiPoruku("Ovo je neka poruka za ispis!");

// 2. imenovane funkcije sa povratnom vrednoscu - objasniti interpoliran string
function ispisiPoruku2(poruka:string):string{
    return `Poruka: ${poruka}`;
}
let prom5:string = ispisiPoruku2("Ovo je neka druga poruka !");
console.log(prom5)

// 3. anonimne funkcije
let zbir = function(prvi:number,drugi:number):number{
    return prvi+drugi;
}
console.log(zbir(5,10));

// 4. arrow funkcije - objasniti opcioni i podrazumevani parametar
let zbir2 =(prvi:number = 5,drugi?:number):number => {
    if(drugi){
        return prvi+drugi;
    } 
    else{
        return prvi;
    }
}
console.log("Zbir dva broja je: " + zbir2());

// tokom kucanja koda preci sa vremena na vreme na index.js da se vidi razlika u strukturi izmedju js i ts 

// Ako bude vremena preci i otkucati i aliase i union tipove, ako nema proci kroz skriptu ove koncepte
// Aliasi
type Osoba = {
    ime:string,
    godine:number,
    student:boolean
};

let osoba1:Osoba = {ime:"Marko", godine:24, student:true};
// let osoba2:Osoba = {ime:"Aleksa", godine:26}; // greska, mora svi parametri da se definisu
console.log("Osoba je: " + osoba1.ime +" , ima " + osoba1.godine + " godina, i student je: " + osoba1.student);

// Union tip podataka
let godine: number | string;
godine = 30; // ispravno 
godine = '25'; // ispravno
console.log("Promenljiva godine ima vrednost:" + godine);

// Spomenuti koncepte objektno-orjentisanog programiranja koji su omoguceni u TypeScript-u
class Student{

    //atributi
    ime: string;
    prezime: string;
    brojindeksa: string;

    // konstruktor
    constructor(ime:string,prezime:string,brojindeksa:string){
        this.ime = ime;
        this.prezime = prezime;
        this.brojindeksa = brojindeksa;
    }

    // metode
    ispisi():void{
        console.log(`Student: ${this.ime} ${this.prezime}, indeks: ${this.brojindeksa}`);
    }
}

let student1 = new Student("Petar", "Petrovic","pp20250001");
student1.ispisi();