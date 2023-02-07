/*
    Loop through the string input list
    --> sort each string
    --> sorted key in table? add to array
    --> sorted key not in table? create array
*/

const groupAnagram = (strs) => {
    const ht = {};
    for (let str in strs) {
        const sorted = str.split('').sort().join('')
        if (ht[sorted]) ht[sorted].push(str)
        else ht[sorted] = [str]
    }
    return Object.values(ht)
}