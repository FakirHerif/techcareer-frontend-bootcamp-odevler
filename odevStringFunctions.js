/* 1) "  Çağatay Yıldız" isimli metindeki boşlukları kaldır.    (REPLACE)
2) "cagatay yildiz" kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)
3) "******Çağatay Yıldız" isimli metindeki yıldızları kaldır (REPLACE)
4) "Çağatay  Yıldız" metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)
5) "**Tech Career**" isimli metindeki yıldızları kaldır (REPLACE)
6) "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy. "***Tech Career***" ( Normal toplama operatörü)
7) "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült (SUBSTRING)
8) "Tech bilişim" kelimelerin ilk harflerini büyült (Substring ve upper) */


/* ------------------------------------------ */

// 1

let isim = "  Çağatay Yıldız";
isim = isim.replaceAll(" ", "")
console.log(isim);

console.log("------------ 1. ÖDEV SONU ------------");

// 2

let isim2 = "cagatay yildiz";
isim2 = isim2.replaceAll(" ","").toUpperCase();
console.log(isim2);

console.log("------------ 2. ÖDEV SONU ------------");

// 3

let isim3 = "******Çağatay Yıldız";
isim3 = isim3.replaceAll("******","");
console.log(isim3);

console.log("------------ 3. ÖDEV SONU ------------");

// 4

let isim4 = "Çağatay  Yıldız";
isim4 = isim4.replaceAll("  "," ");
console.log(isim4);

console.log("------------ 4. ÖDEV SONU ------------");