module.exports = function toReadable(number) {
  let result = '';
  const numbersZeroNine = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const numbersTenNineteen = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const numbersTwentyNinety = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  if (number === 0) {
    return 'zero';
  }
  if (number < 10) {
    return numbersZeroNine[number.toString()];
  }
  if (number < 20) {
    return numbersTenNineteen[number.toString()];
  }
  if (number < 100) {
    const desyatki = Math.floor(number / 10);
    const edinitsy = number % 10;
    if (edinitsy !== 0) {
      const desyatkiStr = numbersTwentyNinety[desyatki.toString()];
      const edinitsyStr = numbersZeroNine[edinitsy.toString()];
      result = `${desyatkiStr} ${edinitsyStr}`;
      return result;
    }
    const desyatkiStr = numbersTwentyNinety[desyatki.toString()];
    result = desyatkiStr;
    return result;
  }
  if (number < 1000) {
    const sotny = Math.floor(number / 100);
    const ostatok = number % 100;
    if (ostatok === 0) {
      result = `${numbersZeroNine[sotny.toString()]} hundred`;
      return result;
    }
    result = `${numbersZeroNine[sotny.toString()]} hundred ${toReadable(ostatok)}`;
    return result;
  }
  return result;
};
