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