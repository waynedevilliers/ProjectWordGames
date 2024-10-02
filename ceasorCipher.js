// Step 1: Get inputs from process.argv
const phrase = process.argv[2];  // The phrase to encrypt
const shift = parseInt(process.argv[3]);  // The shift value (convert to integer)

if (phrase.length !== 1 || shift.length !== 1) {
    console.log("There needs to be a phrase and a shift number!")
}

// Step 2: Caesar Cipher Function
function caesarCipher(phrase, shift) {
    let encrypted = '';

    // Loop through each character in the phrase
    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];

        // Step 3: Check if the character is a letter
        if (char.match(/[a-zA-Z]/)) {
            // Determine if the letter is uppercase or lowercase
            let charCode = char.charCodeAt(0);
            let base = (char >= 'A' && char <= 'Z') ? 65 : 97;  // ASCII of 'A' or 'a'

            // Step 4: Apply the shift, keeping within the alphabet range
            let newCharCode = ((charCode - base + shift) % 26 + 26) % 26 + base;
            
            // Append the shifted character to the encrypted string
            encrypted += String.fromCharCode(newCharCode);
        } else {
            // Step 5: If not a letter, keep the character as is (spaces, punctuation)
            encrypted += char;
        }
    }

    // Output the final encrypted message
    return encrypted;
}

// Step 4: Call the function and print the result
console.log(caesarCipher(phrase, shift));
