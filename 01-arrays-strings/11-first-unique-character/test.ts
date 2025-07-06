import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { firstUniqChar } from './question';

const testCases: TestCase[] = [
  { input: { s: "leetcode" }, expectedOutput: 0, description: "First character is unique" },
  { input: { s: "loveleetcode" }, expectedOutput: 2, description: "Third character is unique" },
  { input: { s: "aabb" }, expectedOutput: -1, description: "No unique characters" },
  { input: { s: "a" }, expectedOutput: 0, description: "Single character" },
  { input: { s: "aa" }, expectedOutput: -1, description: "Two same characters" },
  { input: { s: "ab" }, expectedOutput: 0, description: "Two different characters" },
  { input: { s: "abcabc" }, expectedOutput: -1, description: "All characters repeat" },
  { input: { s: "abcde" }, expectedOutput: 0, description: "All unique characters" },
  { input: { s: "aabcc" }, expectedOutput: 2, description: "Middle character unique" },
  { input: { s: "aabbcc" }, expectedOutput: -1, description: "All characters repeat" }
];

console.log("🧪 Testing First Unique Character Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function firstUniqChar(s: string): number {
  const freq = new Map();
  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) return i;
  }
  return -1;
}
`;

const summary = TestRunner.run(firstUniqChar, testCases, "First Unique Character", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 