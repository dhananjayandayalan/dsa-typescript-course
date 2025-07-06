import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { isPalindrome } from './question';

const testCases: TestCase[] = [
  { input: { s: "A man, a plan, a canal: Panama" }, expectedOutput: true, description: "Classic palindrome with punctuation" },
  { input: { s: "race a car" }, expectedOutput: false, description: "Not a palindrome" },
  { input: { s: " " }, expectedOutput: true, description: "Empty string after cleaning" },
  { input: { s: "0P" }, expectedOutput: false, description: "Alphanumeric with non-palindrome" },
  { input: { s: "a." }, expectedOutput: true, description: "Single character with punctuation" },
  { input: { s: "ab_a" }, expectedOutput: true, description: "Palindrome with underscore" },
  { input: { s: "No lemon, no melon" }, expectedOutput: true, description: "Palindrome with spaces and punctuation" }
];

console.log("🧪 Testing Valid Palindrome Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
`;

const summary = TestRunner.run(isPalindrome, testCases, "Valid Palindrome", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 