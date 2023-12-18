// Challenge 677 - First Letter Shift (JavaScript) - TayqQ

const sentence = "AB CD EF GH";

shift_sentence = (sentence) => {

    const sentenceArray = sentence.split(" ");      // Turning the sentence from a string into an array
    for (let i = 0; i < sentenceArray.length; i++) {
        const currentWord = sentenceArray[i];
        const nextWord = sentenceArray[(i+1) % sentenceArray.length];    // Modulus array.length so that the final word in the array loops back around to the first word in the array
        sentenceArray[i]= nextWord.charAt(0) + currentWord.slice(1);    // Transforming the current word
    }
   
    return sentenceArray.join(" ");     // Re-joining the array - turning the sentence back into a string
}
        
console.log(shift_sentence(sentence));      // Logging the sentence inside of the shift_sentence function