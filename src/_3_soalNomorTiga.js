function isNumber(val) {
  let isValid = /^\d+$/.test(val);
  return isValid;
}

function soalNomorTiga(stringVal) {
  let tmpStr = '';
  for (let i = 0; i < stringVal.length; i++) {
    if (isNumber(stringVal.charAt(i)) === true) {
      tmpStr += stringVal.charAt(i);
    }
  }

  let lengthStr = tmpStr.length;
  let string = '';
  for (let i = 0; i < lengthStr; i++) {
    // printing star
    for (let k = 0; k < lengthStr - i; k++) {
      if (tmpStr.charAt(k) == string.charAt(k)) {
        string += tmpStr.charAt(i);
      } else {
        string += tmpStr + '\n';
      }
    }
    string += '\n';
  }
  return string;
}

console.log(soalNomorTiga('9.86-A5.321'));
