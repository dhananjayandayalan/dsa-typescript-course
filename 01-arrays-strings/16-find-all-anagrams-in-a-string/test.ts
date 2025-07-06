import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { findAnagrams } from './question';

const testCases: TestCase[] = [
  { input: { s: "cbaebabacd", p: "abc" }, expectedOutput: [0, 6], description: "Multiple anagrams found" },
  { input: { s: "abab", p: "ab" }, expectedOutput: [0, 1, 2], description: "Overlapping anagrams" },
  { input: { s: "a", p: "a" }, expectedOutput: [0], description: "Single character match" },
  { input: { s: "a", p: "b" }, expectedOutput: [], description: "No match" },
  { input: { s: "abc", p: "abc" }, expectedOutput: [0], description: "Exact match" },
  { input: { s: "abc", p: "ab" }, expectedOutput: [0], description: "Pattern shorter than string" },
  { input: { s: "ab", p: "abc" }, expectedOutput: [], description: "Pattern longer than string" },
  { input: { s: "aa", p: "aa" }, expectedOutput: [0], description: "Repeated characters" },
  { input: { s: "ababab", p: "ab" }, expectedOutput: [0, 1, 2, 3, 4], description: "Multiple matches" },
  { input: { s: "cbaebabacd", p: "abc" }, expectedOutput: [0, 6], description: "Complex case" }
];

console.log("🧪 Testing Find All Anagrams in a String Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return [];
  
  const pCount = new Map();
  const sCount = new Map();
  const result = [];
  
  for (const char of p) {
    pCount.set(char, (pCount.get(char) || 0) + 1);
  }
  
  let matches = 0;
  const required = pCount.size;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sCount.set(char, (sCount.get(char) || 0) + 1);
    
    if (pCount.has(char) && sCount.get(char) === pCount.get(char)) {
      matches++;
    }
    
    if (i >= p.length) {
      const leftChar = s[i - p.length];
      if (pCount.has(leftChar) && sCount.get(leftChar) === pCount.get(leftChar)) {
        matches--;
      }
      sCount.set(leftChar, sCount.get(leftChar) - 1);
    }
    
    if (matches === required) {
      result.push(i - p.length + 1);
    }
  }
  
  return result;
}
`;

const summary = TestRunner.run(findAnagrams, testCases, "Find All Anagrams in a String", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 