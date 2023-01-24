function soalNomorTujuh(num) {
  const low = 2;
  const high = 15;
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] < low) {
      result = result;
    } else if (num[i] > high) {
      result = result;
    } else {
      result.push(num[i]);
    }
  }
  return result.length;
}

console.log(soalNomorTujuh([1, 4, 7, 9, 12]));
