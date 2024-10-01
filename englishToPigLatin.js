// Function to convert a single word to Pig Latin
function toPigLatin(word) {
    const firstLetter = word.charAt(0);
    const secondLetter = word.charAt(1);
    
    // Check if the first letter is a vowel
    if (/[aeiouAEIOU]/.test(firstLetter)) {
        // If it starts with a vowel, add "way" at the end
        return word + "way";
    } else if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(firstLetter) && 
               /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(secondLetter)) {
        // If it starts with two consonants, move them to the end and add "ay"
        return word.slice(2) + firstLetter + secondLetter + "ay";
    } else {
        // If it starts with a consonant, move the first letter to the end and add "ay"
        return word.slice(1) + firstLetter + "ay";
    }
}

// Main function to translate a phrase
function translateToPigLatin(phrase) {
    // Split the phrase into words
    const words = phrase.split(' ');
    // Map each word to its Pig Latin form
    const pigLatinWords = words.map(toPigLatin);
    // Join the Pig Latin words into a single string
    return pigLatinWords.join(' ');
}

// Get the input phrase from command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("Please provide an English phrase to translate to Pig Latin.");
    process.exit(1); // Exit the program if no input is provided
}

// Join the arguments into a single phrase
const phrase = args.join(' ');

// Translate the phrase to Pig Latin
const translatedPhrase = translateToPigLatin(phrase);

// Output the translated phrase
console.log(translatedPhrase);
