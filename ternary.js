let age = 17;
age >= 18 ? console.log("oy kullanabilirsin") : console.log("oy kullanmazsin");

// tek sayi - cift sayi

let num = 65;
//num % 2
//  ? document.write("tek sayi girdiniz")
//  : document.write("cift sayi girdiniz");

let message = num % 2 ? "tek sayi girdiniz" : "cift sayi girdiniz";
console.log(message);

let sayi = -1;
let kontrol =
  sayi >= 0 ? (sayi === 0 ? "sayi nötrdür" : "pozitif") : "sayi negatif";
console.log(kontrol);

let sayi1 = 40;
let sayi2 = 30;
let operatör = prompt("islam operatörünü gir:");

//let result=operatör==="+" ? sayi1+sayi2: sayi1-sayi2

let result =
  operatör === "+"
    ? sayi1 + sayi2
    : operatör === "-"
    ? sayi1 - sayi2
    : "please enter a valid operatör";
console.log(result);
