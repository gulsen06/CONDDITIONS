//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar
//let urun = prompt("lütfen bir ürün giriniz: ");
//let fiyat;
//switch (urun) {
//  case "kalem":
//    fiyat = "kalem 5$";
//    break;
//
//  case "defter":
//    fiyat = "defter 10$";
//    break;
//  default: {
//    console.log("gecerli bir ürün giriniz");
//  }
//}
//console.log(fiyat);

// sistemden aldigi gün bilgisinin karsiligini yazan program

let date = new Date().getDay();

switch (date) {
  case 0:
    day = "pazar";
    break;
  case 1:
    day = "pazartesi";
    break;
  case 2:
    day = "sali";
    break;
  case 3:
    day = "carsamba";
    break;
  case 4:
    day = "persembe";
    break;
  case 5:
    day = "cuma";
    break;
  case 6:
    day = "cumartesi";
    break;
}
console.log(day);

/// kideme göre alinacak promosyon miktarini gösteren programi yaziniz

let maas= 1000;
let kidem = prompt("personelin kidemini giriniz:");
let promosyon;

switch (kidem) {
  case "prof": 
  {
    promosyon = maas+1000;
    console.log(promosyon);
    break;
  }   
    
  case "senior":
    {
        promosyon = maas+700;
        console.log(promosyon);
        break;
      } 
  case "junior":
     {
        promosyon = maas+300;
        console.log(promosyon);
        break;
     }
  default: {
    console.log("100$");
  }
}