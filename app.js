var romanNumeralComponents = {
  thousands: ["", "M", "MM", "MMM"],
  hundreds : ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  tens     : ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ones     : ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
}

function generateRomanNumerals(value) {
  var valueArray    = value.split('').reverse();
  var newValueArray = [
                    romanNumeralComponents.ones[valueArray[0]],
                    romanNumeralComponents.tens[valueArray[1]],
                    romanNumeralComponents.hundreds[valueArray[2]],
                    romanNumeralComponents.thousands[valueArray[3]]
                  ];
  var newValue    = newValueArray.reverse().join('');
  return newValue;
}

var romanNumeralEl = document.getElementById('roman-numeral');
var romanNumeralConvertionFormEl = document.getElementsByTagName('form')[0];

romanNumeralConvertionFormEl.addEventListener('submit', function (e) {
  e.preventDefault();
  var value = romanNumeralConvertionFormEl.querySelector('input').value;
  romanNumeralEl.innerText = `In Roman Numerals, ${value} is ${generateRomanNumerals(value)}`;
});