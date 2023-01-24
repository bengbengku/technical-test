function soalNomorSembilan(num) {
  let min = num[0];
  let max = num[0];
  let i = num.length;

  while (i--) {
    min = num[i] < min ? num[i] : min;
    max = num[i] > max ? num[i] : max;
  }
  return `Nilai terendah: ${min}, Nilai tertinggi: ${max}`;
}

console.log(soalNomorSembilan([4, 2, 6, 88, 3, 11]));
