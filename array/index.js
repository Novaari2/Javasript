const buah = ["aple","orange","banana"];
console.log(buah);

console.log(buah[0]);
console.log(buah[2]);

buah[1] = "Kates";
console.log(buah);

for (let i = 0; i < 3; i++){
    console.log(buah[i]);
}

// =============================================
const animals = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];

// Gunakan property length untuk mem-print jumlah element di array
console.log(animal.length);

// Gunakan property length untuk mengubah kondisi dibawah
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}