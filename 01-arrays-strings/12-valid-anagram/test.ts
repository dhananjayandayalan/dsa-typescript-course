import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { isAnagram } from './question';

const testCases: TestCase[] = [
  { input: { s: "anagram", t: "nagaram" }, expectedOutput: true, description: "Valid anagram" },
  { input: { s: "rat", t: "car" }, expectedOutput: false, description: "Not an anagram" },
  { input: { s: "a", t: "a" }, expectedOutput: true, description: "Single character" },
  { input: { s: "a", t: "b" }, expectedOutput: false, description: "Different single characters" },
  { input: { s: "ab", t: "ba" }, expectedOutput: true, description: "Two characters swapped" },
  { input: { s: "abc", t: "cba" }, expectedOutput: true, description: "Three characters reversed" },
  { input: { s: "hello", t: "world" }, expectedOutput: false, description: "Different words" },
  { input: { s: "silent", t: "listen" }, expectedOutput: true, description: "Classic anagram" },
  { input: { s: "debit card", t: "bad credit" }, expectedOutput: true, description: "Anagram with spaces" },
  { input: { s: "aacc", t: "ccac" }, expectedOutput: false, description: "Different character counts" }
];

console.log("🧪 Testing Valid Anagram Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const freq = new Map();
  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  for (const char of t) {
    const count = freq.get(char) || 0;
    if (count === 0) return false;
    freq.set(char, count - 1);
  }
  return true;
}
`;

const summary = TestRunner.run(isAnagram, testCases, "Valid Anagram", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 