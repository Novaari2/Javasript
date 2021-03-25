// deklarasi objek
const character = {name: "Ninja Ken", age: 14};
console.log(character);

// mengganti nilai objek
character.age = 20;

console.log(character)

// objek sebagai array
const karakter = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 1000}
  ];

// mencetak elemen pertama dari array objek
// Print element pertama milik array characters
console.log(karakter[0]);

// Print nilai milik property name dari element array character kedua 
console.log(karakter[1].name);

// looping objek
// Selesaikan loop for dibawah
for (let i = 0; i < karakter.length;i++) {
    console.log("--------------------");
    
    // Tentukan nilai constant character
    const character = karakter[i];
    
    // Print "Nama saya adalah ____"
    console.log("Nama saya adalah " + character.name);
    
    // Print "Saya berusia ____ tahun"
    console.log(`Saya berusia ${character.age} tahun`);
}