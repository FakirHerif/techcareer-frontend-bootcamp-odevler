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

// 5

let isim5 = "**Tech Career**";
isim5 = isim5.replaceAll("**","");
console.log(isim5);

console.log("------------ 5. ÖDEV SONU ------------");

// 6

let isim6 = "Tech Career";
isim6 = "***" + isim6 + "***"
console.log(isim6);

console.log("------------ 6. ÖDEV SONU ------------");

// 7

let isim7 = "Tech Career Bilişim teknolojileri";
let sonKelime = isim7.substring(20)
sonKelime = sonKelime.toUpperCase();
console.log(sonKelime);         // Sadece son kelimeyi büyük yazdırdım
isim7 = isim7.substring(0, 20);
isim7 = isim7 + sonKelime
console.log(isim7);             // büyük kelimeyi cümleye dahil ettim ve yazdırdım

// veya daha kolay bir yol;

console.log("--- diğer yöntem ---")
let yedekisim7 = "Tech Career Bilişim teknolojileri";
yedekisim7 = yedekisim7.replace("teknolojileri", "TEKNOLOJİLERİ")
console.log(yedekisim7);

console.log("------------ 7. ÖDEV SONU ------------");

// 8

let isim8 = "Tech bilişim";
ilkHarf = isim8.substring(0,1).toUpperCase([0]);
console.log(ilkHarf);
ikinciHarf = isim8.substring(5,6).toUpperCase([0]);
console.log(ikinciHarf);

// veya daha kolay bir yol

let yedekisim8 = "Tech bilişim";
yedekisim8 = yedekisim8.replace("T", "T") && yedekisim8.replace("b", "B");
console.log(yedekisim8);

console.log("------------ 8. ÖDEV SONU ------------");