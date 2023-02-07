/**Find first unique character
 * Given a string, find the first non-repeating character in it, and return it's index
 * If it doesn't exist, return -1
 */

/** PSEUDO
 * We need to look at each character
 * --> update the character count and store it
 * look up each character in the table
 * --> if it's unique (value == 1) return index,
 * none are unique, return -1
 */

// SOLUTION 1
var solution1 = function (s) {
    var hashTable = {};

    for (let char of s) {
        if (hashTable[char]) hashTable[char]++;
        else hashTable[char] = 1;
    }

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (hashTable[char] == 1) return i
    }

    return -1;
}


// SOLUTION 2
var solution2 = function (s) {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return i
        }
    }

    return -1;
}