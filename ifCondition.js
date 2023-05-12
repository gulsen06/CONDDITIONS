/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

// Programlama dillerinde kodlar yukarıdan aşağıya çalışır.Bu yapıyı bozan bazı durumlar vardır. Bunlardan biri karar yapılarıdır.
//let yas = +prompt("yasinizi giriniz");
//if (yas > 18) {
//  // sartin dogru oldugundacalisan kisim
//  console.log("oy kullanabilirsin");
//} else {
//  console.log("oy kullanamazin");
//}
////
//let sayi = +prompt("sayi giriniz");
//let sonuc = sayi % 2;
//if (sonuc === 0) {
//  console.log("cift sayi");
//} else {
//  console.log("tek sayi");
//}

// elektrik sinyali durumuna göre lamba yanar yada yanmaz kod blogunu olsturunuz

//let sinyal = prompt("sinyal var mi?");
//if (sinyal == "evet") {
//  console.log("sinyal var");
//} else {
//  console.log("sinyal yok");
//}
//! ******If-ELSE IF-ELSE**************
// birden fazla karar durumunda else if ifadesi kullanilir.
//her else if  kismina sart durumu yazilmalidir

// Bir den fazla karar durumu varsa else if de kullanılır.
// her else if kısmına da şart durumu yazmalıyız.

/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

//20-44 =your grade is not enoug to pass the classe
//45-69 =Your grade is enough to pass the class but not successful
//70-100 =Passed the course successflully

//let grade = +prompt("enter your grade");
//if (grade >= 20 && grade < 45) {
//  document.write("your grade is not enoug to pass the classe");
//} else if (grade >= 45 && grade < 70) {
//  document.write("Your grade is enough to pass the class but not successful");
//} else if (grade >= 70 && grade <= 100) {
//  document.write("Passed the course successflully");
//} else if (grade > 100 || grade < 20) {
//  document.write("Enter a value between 0 - 100");
//} else {
//  document.write("please enter a nummer");
//}
//
//console.log("islem bitti");

// calculate the shipping fee accr. to infor. given

let mesafe = +prompt(" mesafeyi giriniz");
let price;
if (mesafe > 0 && mesafe <= 500) {
  console.log((price = mesafe * 50));
} else if (mesafe >= 501 && mesafe <= 999) {
  console.log((price = mesafe * 100));
} else if (mesafe >= 1000) {
  console.log((price = mesafe * 500));
} else {
  console.log("lütfen bir sayi giriniz");
}
