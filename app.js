function generateRomanNumerals(originalValue) {
  var romanNumeralComponents = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Hundreds
    ["", "M", "MM", "MMM"]                                        // Thousands. Capped at 3000, as per brief
  ];

  // Validation, in this specific project, is done at form input level
  // but the function can be used independently so
  // validating within the function makes sense
  if (!originalValue.match(/^[0-9\.]*$/)) {
    // originalValue is not a number. Here's a random number instead
    originalValue = ~~(Math.floor(Math.random() * 3999) + 1);
    // Alternatively, uncomment the below:
    // return false;
  }
  if (originalValue < 1) {
    // If a lower number gets through, up it to within bounds
    originalValue = "1";
    // Alternatively, uncomment the below:
    // return false;
  }
  if (originalValue > 3999) {
    // If a higher number gets through, drop it to within bounds
    originalValue = "3999";
    // Alternatively, uncomment the below:
    // return false;
  }
  if (originalValue % 1 !== 0) {
    // If a decimal float gets through, round it to the nearest whole number
    originalValue = Math.round(originalValue);
    // Alternatively, uncomment the below:
    // return false;
  }
  
  // Always be needing strings!
  originalValue = originalValue.toString();

  // Reversing the array because there will always be a 1 but not always a thousand
  var originalValueArray = originalValue.split("").reverse();
  var newValueArray = [];
  var originalValueArrayLength = originalValueArray.length; // Cache this originalValue so it isn't calculated on every pass

  // Populate the newValueArray with the Roman Numeral equivalents for each number
  for (var i = 0; i < originalValueArrayLength; i++) {
    newValueArray.push(romanNumeralComponents[i][originalValueArray[i]]);
  }

  // Then, like Blazin' Squad, we flip reverse it to put the
  // numerals back in the right order
  var newValue    = newValueArray.reverse().join('');
  return { 
    originalValue: originalValue,
    newValue: newValue 
  };
}

// Show the results to the user on submission of the form
var romanNumeralEl = document.getElementById('roman-numeral');
var romanNumeralConversionFormEl = document.getElementsByTagName('form')[0];

romanNumeralConversionFormEl.addEventListener('submit', function (e) {
  e.preventDefault();
  var originalValue = romanNumeralConversionFormEl.querySelector('input').value;

  romanNumeralEl.innerHTML = 'In Roman Numerals, ' + 
    generateRomanNumerals(originalValue).originalValue + 
    ' is <strong aria-label="' + 
    generateRomanNumerals(originalValue).newValue.split("").join("-") + '">' + 
    generateRomanNumerals(originalValue).newValue + 
    '</strong>';
  
  romanNumeralEl.setAttribute('data-state', '');
});