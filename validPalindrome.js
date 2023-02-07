/* Naive Solution */
const naive = (str) => {
    const san = str.replace(/[^\w]/gi, '').toLowerCase()
    return san.split('').reverse().join('') === san;
}


/* POINTER METHOD
    create left and right pointers (represented by indices)
    while pointer haven't met
    --> check if chars are the same
    --> move pointers towards center
*/

const pointer = (s) => {
    // Instead of store "s" in a variable, update itself to keep it as Constant Space O[1] --> optimize Space Complexity
    s = s.replace(/[^\w]/gi, '').toLowerCase()
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false
        left++;
        right--;
    }
    return true
}