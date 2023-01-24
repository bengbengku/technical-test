function soalNomorSatu(num) {
  let hasil = 1;
  for (let i = 2; i <= num; i++) {
    hasil = hasil * i;
  }
  return hasil;
}

console.log(soalNomorSatu(8));
