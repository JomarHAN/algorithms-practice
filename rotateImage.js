/**ROTATE IMAGE
 * You are given an n x n 2D matrix representing an image
 * Rotate the image by 90 degrees (clockwise)
 * you have to rotate the image IN PLACE (no second matrix)
 */

/**PSEUDO
 * reverse outer arrays
 * for each row
 *  --> for each column
 *      --> flip coordinates
 */

var rotateImage = function (matrix) {
    matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp;
        }
    }
}

/** Big-O Complexity
 * Time: O(n^2)
 * Space: 0(1)
  */