const modulo = (number) => {
  return number % 3 === 0;
};

if (modulo(123)) {
  console.log("multiple 3");
} else {
  console.log("not a multiple 3");
}
