const age = 24;

// Cetak hasil dari age >= 18
console.log(age >= 18);

// Cetak hasil dari age < 18
console.log(age < 18);
/* Ketika nilai dari age lebih besar atau sama dengan 18
dan cetak "Saya berusia lebih dari 18 tahun" */
if (age >= 18){
  console.log("Saya berusia lebih dari 18 tahun");
}

const password = "ninjaken";

// Ketika nilai password adalah "ninjaken", cetak "Berhasil log in"
if (password === "ninjaken"){
  console.log("Berhasil log in");
}

// Ketika nilai password bukan "ninjaken", cetak "Password salah"
if (password !== "ninjaken"){
  console.log("Password salah");
}

const age = 17;

// Ketika kondisi tidak terpenuhi, cetak "Saya berusia dibawah 18 tahun"
if (age >= 18) {
  console.log("Saya berusia diatas 18 tahun");
} else {
  console.log("Saya berusia dibawah 18 tahun");
}

// ==========================================================================
const usia = 17;

/* Ketika age lebih besar atau sama dengan 10, cetak:
"Saya berusia dibawah 18 tahun, namun diatas 9 tahun" */
if (usia >= 18) {
  console.log("Saya di atas 18 tahun");
} else if (usia >= 10){
  console.log("Saya berusia dibawah 18 tahun, namun diatas 9 tahun");
}

 else {
  console.log("saya dibawah 10 tahun");
}
// ===========================================================================
const rank = 2;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;

  // Tambahkan case ketika rank adalah 2
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  
  // Tambahkan case ketika rank adalah 3
  case 3:
    console.log('Anda meraih medali perunggu!');
    break;
  default:
      console.log("Anda Belum Beruntung");
    break;
  
}
