// Count and Say
// https://leetcode.com/problems/count-and-say/

/**
 * Problem Statement:
 *
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * - countAndSay(1) = "1"
 * - countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
 *
 * To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts and characters with the corresponding digits.
 *
 * Example 1:
 * Input: n = 1
 * Output: "1"
 * Explanation: This is the base case.
 *
 * Example 2:
 * Input: n = 4
 * Output: "1211"
 * Explanation:
 * countAndSay(1) = "1"
 * countAndSay(2) = say "1" = one 1 = "11"
 * countAndSay(3) = say "11" = two 1's = "21"
 * countAndSay(4) = say "21" = one 2 then one 1 = "1211"
 *
 * Constraints:
 * - 1 <= n <= 30
 */

/**
 * Solution Function
 *
 * @param n - The term of the sequence to return
 * @returns The nth term of the count-and-say sequence
 */
export function countAndSay(n: number): string {
  // TODO: Implement your solution here
  return "";
} 