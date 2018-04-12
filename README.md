# Convert Arabic numbers to Roman Numerals

When provide with an Arabic number between 1 and 3999, the `generateRomanNumeral()` function will return the value in the equivalent Roman Numerals.

## Codebase

Written in vanilla JavaScript without libraries to remove any load time.
I have stayed to ES5 syntax for this as I didn't want to include convoluted compilers to make a single function work on legacy browsers. For the same reason, I have used the CDN version of Jasmine.

## Design

I have kept everything to a minimum as building a front-end wasn't specifically part of the brief. I have tested the front-end on a variety of browsers (see below) as well as ensuring it is keyboard navigable, meets the contrast ratios for WCAG AAA approval, and works acceptably using the _ChromeVox_ browser extension.

## Tests

### Validation

I have assumed that valid input will come only in Arabic numbers, no other character sets have been accounted for.

### Unit tests

Tested using Jasmine. Tests pass.

### Browser test

Tested in

| Operating System | Browser           | Version         | Status |
| ---------------- | ----------------- | --------------- | ------ |
| Windows 10       | Chrome            | 65.0.3325.181   | Pass   |
| Windows 10       | Firefox           | 59.0.2 (64-bit) | Pass   |
| Windows 10       | Edge              | 41.16299.248.0  | Pass   |
| Windows 10       | Internet Explorer | 11.309.16299.0  | Pass   |
| OSX High Sierra  | Chrome            |                 |        |
| OSX High Sierra  | Firefox           |                 |        |
| OSX High Sierra  | Safari            |                 |        |
| Android 8.1      | Chrome            |                 |        |
| Android 8.1      | Firefox           |                 |        |
| iOS 9.0          | Chrome            |                 |        |
| iOS 9.0          | Firefox           |                 |        |
