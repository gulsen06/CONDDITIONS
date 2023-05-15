let harcama = +prompt("harcama miktarnizi tl olarak giriniz:  ");

if (harcama % 10 == 0) {
 console.log("size ", harcama * 10, "bonus verilecek");
} else if (harcama % 4 == 0) {
 console.log("size ", harcama * 3, "bonus verilecek");
} else if (harcama % 5 == 0) {
 console.log("size ", harcama * 5, "bonus verilecek");
} else {
 console.log("alisverise devam");
}

// Girilen nesneye göre atılması gereken çöp kutusunu belirten program
// Ekmek = > gıda çöpüne
// şise => Cam çöpü
// karton => kağıt çöpüne
let nesne = prompt("cop turu girin");
let copTuru;
switch (nesne) {
 case "karton":
   copTuru = "kagit copune gitsin";
   break;
 case "sise":
   copTuru = "cam copune gitsin";
   break;
 case "ekmek":
   copTuru = "gida copune gitsin";
   break;
 default: {
   console.log("genel cope at");
 }
}
//console.log(copTuru);
// Dart oyununda attığnız noktaya göre puan alıyorsunuz. Kullanıcıdan attığı alanı girmesini isteyip puanını yazan program

// Pano yarıçapı ve dış daire yarıçapı = 10 birim
// Orta daire yarıçapı = 5 birim
// İç daire yarıçapı = 1 birim
// R > 10    0 puan verir,  10 >= R > 5   1 puan verir, 5 >= R > 1   5 puan verir,  R <= 1 10 puan verir.

let R = +prompt("lütfen oku attiginiz alanin kac birim oldugunu giriniz  : ");

if (10 >= R && R > 5) {
 console.log("tebrikler 1 puan kazandiniz");
} else if (5 >= R && R > 1) {
 console.log("tebrikler 5 puan kazandiniz");
} else if (R <= 1) {
 console.log("tebrikler 10 puan kazandiniz");
} else if (R > 10) {
 console.log("malesef hic puan kazanamadiniz tekrar deneyin");
//}
// Sevdiğiniz kitap türünü girnce ona göre önerilerde bulunan programı switch -case yapısı ile oluşturunuz

// ÖRNEK: Sevdiğiniz kitap türünü girin: Roman
// Önerimiz: Anna Karenina
let kitapTürü = prompt("sevdigiz kitap türünü yaziniz");
let onerimiz;
switch (kitapTürü) {
 case "roman":
   onerimiz = "Cengiz Aytmatov";
   break;
 case "biyografi":
   onerimiz = "Anna Frank";
   break;

 case "siir":
   onerimiz = "Orhan Veli Kanik";

 default: {
   console.log("aradiginiz kitap türüne verecegimiz hicbir tavsiyemiz yok");
 }
}
console.log(onerimiz);

// Hava durumuna göre giyilmesi gereken kıyafet türünü veren program
let havaDrumu = prompt("Hava durumunu giriniz: ");
let kiyafet;
switch (havaDrumu) {
  case "günesli":
    kiyafet = "yazlik ince kiyafet giyini";
    break;
  case "bulutlu":
    kiyafet = "lütfenbir mont yada hirka giyiniz";
    break;
  case "yagmurlu":
    kiyafet = "Semsiye ve yagmurluk yaninizda olsun";
    break;
  case "karli":
    kiyafet = "Kislik montunuzu ve botunuzu giyiniz";
    break;

  default: {
    console.log("lütfen hava durumunu giriniz");
  }
}
console.log(kiyafet);

// Bir siteye üye olup olmadığı sorusunu sorup cevaba göre Giriş yapabilirsiniz, Üyelik yapın mesajını yazan ternary yapısını oluşturun.
let cevap = prompt("Sitemize üyeliginiz Var mi?");
let mesaj =
  cevap === "evet"
    ? "Üye bilgilerinizle sitemize giris yapabilirsiniz"
    : cevap === "hayir"
    ? "Giris icin lütfen sitemize üye olunuz"
    : "lütfen  cevabi giriniz";
console.log(mesaj);

//Girilen iki renk karıştırılınca sonucun ne olduğunu gösteren programı oluşturun
// ÖRN:
// renk1:mavi
// renk2: kırmızı
// oluşan renk: Mor

let renk1 = prompt("Birinci rengi giriniz");
let renk2 = prompt("Ikinci rengi giriniz");
let karisimRengi =
  renk1 == "kirmizi" && renk2 == "beyaz"
    ? "Iki rengin karisimi pembedir"
    : renk1 == "kirmizi" && renk2 == "sari"
    ? "Iki rengin karisimi turuncudur."
    : renk1 == "beyaz" && renk2 == "siyah"
    ? "iki rengin karisimi gridir."
    : "lütfen sisteme ana renk giriniz";
console.log(karisimRengi);
