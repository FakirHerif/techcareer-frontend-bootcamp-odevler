/* 
1- "Tech Career" metnini tersten yazdır

2- var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki SADECE poizitif sayıların toplamını ekrana yaz

3- var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki en büyük sayı hangisidir?

4- 1-50 arası sayılar içinde 3’e veya 5’e tam bölünebilen sayıları console a yaz ve kaç adet olduğunu console yaz. */

/* ------------------------------------------ */

// 1

let isim = "Tech Career";
isim = isim.split("").reverse().join("");
console.log(isim);

console.log("------------ 1. ÖDEV SONU ------------");

// 2

let sayilar = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];

let poizitifSayilar = sayilar.filter(function(sayi) {
    return sayi > 0;
})

console.log(poizitifSayilar);

let pozitifToplam = poizitifSayilar.reduce(function(adim1, adim2) {
    return adim1 + adim2;
});

console.log(pozitifToplam);

console.log("--- diğer yöntem ---")

// diğer yöntem

let sayilarYedek = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
let toplam = 0;

for (let i = 0; i < sayilarYedek.length; i++) {
    if (sayilarYedek[i] > 0) {
        toplam += sayilarYedek[i];
    }
}
console.log(toplam);

console.log("------------ 2. ÖDEV SONU ------------");

// 3

let sayilar3 = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
sayilar3 = Math.max(...sayilar3);
console.log(sayilar3);

console.log("------------ 3. ÖDEV SONU ------------");