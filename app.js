function generateRomanNumerals(value) {
  var romanNumeralComponents = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Hundreds
    ["", "M", "MM", "MMM"] // Thousands. Capped at 3, as per brief
  ];
  // Reversing the array because there will always be a 1 but not always a thousand
  var valueArray    = value.split('').reverse();
  var newValueArray = [];
  var valueArrayLength = valueArray.length; // Cache this value so it isn't calculated on every pass

  for (var i = 0; i < valueArrayLength; i++) {
    newValueArray.push(romanNumeralComponents[i][valueArray[i]]);
  }

  // Like Blazin' Squad, we flip reverse it to put the
  // numerals back in the right order
  var newValue    = newValueArray.reverse().join('');
  return newValue;
}

// Show the results to the user on submission of the form
var romanNumeralEl = document.getElementById('roman-numeral');
var romanNumeralConvertionFormEl = document.getElementsByTagName('form')[0];

romanNumeralConvertionFormEl.addEventListener('submit', function (e) {
  e.preventDefault();
  var value = romanNumeralConvertionFormEl.querySelector('input').value;
  romanNumeralEl.innerHTML = "In Roman Numerals, " + value + ' is <strong aria-label="' + generateRomanNumerals(value).split('').join('-') + '">' + generateRomanNumerals(value) + "</strong>";
});