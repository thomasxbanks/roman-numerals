function generateRomanNumerals(originalValue) {
  // Validation, in this specific project, could be done at form input level
  // but the function can be used independently so
  // validating within the function makes sense
  if (!originalValue.match(/^[0-9\.]*$/)) {
    // originalValue is not a number.
    return false;
  }
  if (originalValue < 1) {
    // originalValue is too low.
    return false;
  }
  if (originalValue > 3999) {
    // originalValue is too high.
    return false;
  }
  if (originalValue % 1 !== 0) {
    // originalValue is not a whole number.
    return false;
  }
  
  // Always be needing strings!
  originalValue = originalValue.toString();

  // Now we have a valid value to use, list out the parts 
  // that make up a Roman Numeral
  var romanNumeralComponents = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Hundreds
    ["", "M", "MM", "MMM"]                                        // Thousands. Capped at 3000, as per brief
  ];

  // Reverse the array because there will always be a 1 but not always a thousand
  var originalValueArray = originalValue.split("").reverse();
  var newValueArray = [];
  var originalValueArrayLength = originalValueArray.length; // Cache the length of originalValue so it isn't calculated on every pass

  // Populate the newValueArray with the Roman Numeral equivalents for each number
  for (var index = 0; index < originalValueArrayLength; index++) {
    var relevantNumeral = romanNumeralComponents[index][originalValueArray[index]];
    newValueArray.push(relevantNumeral);
  }

  // Then, like Blazin' Squad, we flip reverse it to put the
  // numerals back in the right order
  var newValue    = newValueArray.reverse().join('');
  return newValue;
}

// Show the results to the user on submission of the form
function generateMessage(originalValue, newValue) {
  if (newValue === false) {
    return '<strong>"' + 
            originalValue + 
            '"</strong> is not a valid input for this test. Please try again.' +
            '<br>Valid values are whole numbers between 1 and 3999.';
  } else {
    return 'In Roman Numerals, ' +
      originalValue +
      ' is <strong aria-label="' +
      newValue.split("").join("-") +
      '">' +
      newValue +
      '</strong>';
  }
}

var romanNumeralEl = document.getElementById('roman-numeral');
var romanNumeralConversionFormEl = document.getElementsByTagName('form')[0];

romanNumeralConversionFormEl.addEventListener('submit', function (e) {
  e.preventDefault();
  var originalValue = romanNumeralConversionFormEl.querySelector('input').value;
  romanNumeralEl.innerHTML = generateMessage(originalValue, generateRomanNumerals(originalValue));
  romanNumeralEl.setAttribute('data-state', '');
});