function reverseString(s) {
  let length = s.length - 1;
  let newString = '';
  while (length >= 0) {
    newString += s.charAt(length);
    length = length - 1;
  }
  return newString;
}

console.log(reverseString('abcde'));
