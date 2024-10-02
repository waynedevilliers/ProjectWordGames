// Get inputs (phrase and shift number) from process.argv
const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

function caesarCipher(phrase, shift) {
  // Final result
  let encrypted = "";

  // Loop through each letter in the phrase
  for (let i = 0; i < phrase.length; i++) {
    // get each letter from the phrase
    let char = phrase[i];

    // lowercase letter
    if (char >= "a" && char <= "z") {
      let shiftedCharCode = char.charCodeAt(0) + shift;

      if (shiftedCharCode > "z".charCodeAt(0)) {
        // Wrap back to 'a'
        shiftedCharCode -= 26;
      } else if (shiftedCharCode < "a".charCodeAt(0)) {
        // Wrap to 'z'
        shiftedCharCode += 26;
      }

      encrypted += String.fromCharCode(shiftedCharCode);

      // Uppercase letter
    } else if (char >= "A" && char <= "Z") {
      let shiftedCharCode = char.charCodeAt(0) + shift;

      if (shiftedCharCode > "Z".charCodeAt(0)) {
        // Wrap back to 'A'
        shiftedCharCode -= 26;
      } else if (shiftedCharCode < "A".charCodeAt(0)) {
        // Wrap to 'Z'
        shiftedCharCode += 26;
      }

      encrypted += String.fromCharCode(shiftedCharCode);
    } else {
      // If it's not a letter, keep it unchanged
      encrypted += char;
    }
  }

  return encrypted;
}

console.log(caesarCipher(phrase, shift));
