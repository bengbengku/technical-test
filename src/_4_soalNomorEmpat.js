function soalNomorEmpat(a, b) {
  [a, b] = [b, a];
  return `A: ${a}, B: ${b}`;
}

console.log(soalNomorEmpat(3, 7));
