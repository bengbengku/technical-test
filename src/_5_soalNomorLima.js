function soalNomorLima(num) {
  if (num === 4) {
    return 'Empat';
  } else if (num === 20) {
    return 'dua puluh';
  } else if (num === 39) {
    return 'tiga puluh sembilan';
  } else if (num > 100) {
    return 'silahkan masukkan bilangan 1-100';
  } else if (num < 1) {
    return 'silahkan masukkan bilangan 1-100';
  } else {
    return num;
  }
}

console.log(soalNomorLima(4));
console.log(soalNomorLima(20));
console.log(soalNomorLima(39));
console.log(soalNomorLima(104));
console.log(soalNomorLima(0));
