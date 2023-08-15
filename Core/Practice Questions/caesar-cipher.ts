/**
 * Encrypts a given word using the Caesar cipher with a specified shift.
 *
 * @param word - The input word to be encrypted.
 * @param shift - The amount by which each letter in the word should be shifted.
 * @returns The encrypted word.
 */
const caesarEncrypt = (word: string, shift: number): string => {
    const ALPHABETS = 'abcdefghijklmnopqrstuvxyz';
    const encryptedText = word.split('').map((char: string) => {
        const lowerChar = char.toLowerCase();
        if (ALPHABETS.includes(lowerChar)) {
            const charIndex = ALPHABETS.indexOf(lowerChar);
            const shiftedIndex = (charIndex + shift) % ALPHABETS.length;
            const shiftedChar = ALPHABETS[shiftedIndex];
            return char === lowerChar ? shiftedChar : shiftedChar.toUpperCase();
        }
    }).join('');
    return encryptedText;
}

/**
 * Decrypts a given encrypted word using the Caesar cipher with a specified shift.
 *
 * @param word - The encrypted word to be decrypted.
 * @param shift - The amount by which each letter in the word was originally shifted.
 * @returns The decrypted word.
 */
const caesarDecrypt = (word: string, shift: number): string => caesarEncrypt(word, -shift);

const originalText = 'Hello';
const shiftAmount = 4;

const encryptedText = caesarEncrypt(originalText, shiftAmount);
console.log(`Encrypted: ${encryptedText}`);

const decryptedText = caesarDecrypt(encryptedText, shiftAmount);
console.log(`Decrypted: ${decryptedText}`);
