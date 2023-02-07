/** TWO SUM
 * Given an array of numbers and a target,
 * return the indices of the numbers that add up to the target
 */

/** Naive Solution
 * forloop every number in nums
 *  --> check every OTHER number
 *  --> if == target, return indices
 */
const naiveSolution = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const want = target - num
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === want) return [i, j]
        }
    }
}
/**Big-O Complexity
 * --> Time: O(n^2) Quadratic
 * --> Space: O(1) Constant
 */

/**---------------------------- */

/** HASH-TABLE METHOD
 * forLoop every numbers in nums
 * --> calculate "counterpart"
 * --> in table? return indices
 * --> not in table? store it w/ index
 */
const hashTableSolution = (nums, target) => {
    const ht = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const want = target - num;
        if (want in ht) {
            const leftIndex = ht[want]
            return [leftIndex, i]
        } else {
            ht[num] = i;
        }
    }
}
/**Big-O Complexity
 * --> Time: O(n) linear
 * --> Space: O(n) linear
 */