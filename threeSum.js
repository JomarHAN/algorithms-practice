/** THREE SUM
 * Give an array nums of integers,
 * Are there elemens a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which give the sum of zero
 */


/** Pseudo
 * for every number in nums
 * --> while left < right
 *      --> too low? move left
 *      --> too high? move right
 *      --> zero? add to output, move both
 */

const threeSum = function (nums) {
    const output = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1
        if (i > 0 && nums[i - 1] === nums[i]) continue;
        while (left < right) {
            let total = nums[i] + nums[left] + nums[right]
            if (total === 0) {
                output.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left + 1] === nums[left]) {
                    left++;
                }
                while (left < right && nums[right - 1] === nums[right]) {
                    right--;
                }
                left++;
                right--;
            } else if (total > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return output;
}
/**Big-O Complexity
 * sorting = n log n
 * forLoop = n
 * nested whileLoop = n
 * --> n log n + (n * n) = nlogn + (n^2)
 * Time: O(n^2)
 * Space: O(1)
 */