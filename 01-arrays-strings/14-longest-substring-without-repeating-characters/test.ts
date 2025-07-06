import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { lengthOfLongestSubstring } from './question';

const testCases: TestCase[] = [
  { input: { s: "abcabcbb" }, expectedOutput: 3, description: "Classic sliding window case" },
  { input: { s: "bbbbb" }, expectedOutput: 1, description: "All same characters" },
  { input: { s: "pwwkew" }, expectedOutput: 3, description: "Substring with repeating characters" },
  { input: { s: "" }, expectedOutput: 0, description: "Empty string" },
  { input: { s: "a" }, expectedOutput: 1, description: "Single character" },
  { input: { s: "ab" }, expectedOutput: 2, description: "Two different characters" },
  { input: { s: "aa" }, expectedOutput: 1, description: "Two same characters" },
  { input: { s: "abc" }, expectedOutput: 3, description: "All unique characters" },
  { input: { s: "dvdf" }, expectedOutput: 3, description: "Repeating character in middle" },
  { input: { s: "anviaj" }, expectedOutput: 5, description: "Complex case" },
  { input: { s: "abcdefghijklmnopqrstuvwxyz" }, expectedOutput: 26, description: "All unique characters" },
  { input: { s: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz" }, expectedOutput: 26, description: "Repeated alphabet" }
];

console.log("🧪 Testing Longest Substring Without Repeating Characters Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function lengthOfLongestSubstring(s: string): number {
  const seen = new Map();
  let start = 0;
  let maxLength = 0;
  
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }
    seen.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  return maxLength;
}
`;

const summary = TestRunner.run(lengthOfLongestSubstring, testCases, "Longest Substring Without Repeating Characters", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 