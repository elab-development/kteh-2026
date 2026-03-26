// Eksterni JavaScript
console.log("Ovo je eksterni JS fajl!");

naziv = "Dream Lang";
console.log(naziv);

// Nacini definisanja promenljivih u JS

// var, let, const

let a = 20;
let b = 10;
console.log("Zbir a i b je: ", a+b);

let c = "10 ";
console.log(b==c);
console.log(b===c);

let temperatura = 12;
if (temperatura > 25) {
    console.log("Napolju je toplo");
} else if (temperatura >15){
    console.log("Napolju je prijatno");
}
else{
    console.log("Napolju je hladno");
}

const voce = ['jabuka', 'banana', 'jagoda',1,true];
// console.log(voce);
for(let i = 0; i<voce.length;i++){
    console.log("Ispis elemenata u nizu:",voce[i]);
}

// for of | for in 
for(const v of voce){
    console.log(v);
}

for(const vo in voce){
    console.log(v);
}