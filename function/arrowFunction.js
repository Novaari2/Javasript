const greet = () => {
  console.log("Hello");
};

greet();

// arrow function dengan argument
const nama = (name) => {
  console.log(`Halo, ${name}`);
};

nama("Nova");

// arrow function dengan beberapa argument
const bio = (name, age) => {
  console.log(name, age);
};

bio("nova", 23);

// return
const half = (number) => {
  return number / 2;
};

const result = half(130);

console.log(`Hasil Pembagiannya adalah ${result}`);
