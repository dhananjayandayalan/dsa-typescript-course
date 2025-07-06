import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { checkInclusion } from './question';

const testCases: TestCase[] = [
  { input: { s1: "ab", s2: "eidbaooo" }, expectedOutput: true, description: "Permutation found" },
  { input: { s1: "ab", s2: "eidboaoo" }, expectedOutput: false, description: "No permutation found" },
  { input: { s1: "a", s2: "a" }, expectedOutput: true, description: "Single character match" },
  { input: { s1: "a", s2: "b" }, expectedOutput: false, description: "Single character no match" },
  { input: { s1: "ab", s2: "ab" }, expectedOutput: true, description: "Exact match" },
  { input: { s1: "ab", s2: "ba" }, expectedOutput: true, description: "Permutation match" },
  { input: { s1: "abc", s2: "cba" }, expectedOutput: true, description: "Three character permutation" },
  { input: { s1: "abc", s2: "def" }, expectedOutput: false, description: "No common characters" },
  { input: { s1: "hello", s2: "ooolleoooleh" }, expectedOutput: false, description: "Complex case no match" },
  { input: { s1: "adc", s2: "dcda" }, expectedOutput: true, description: "Permutation in longer string" }
];

console.log("🧪 Testing Permutation in String Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;
  
  const s1Count = new Map();
  const s2Count = new Map();
  
  for (const char of s1) {
    s1Count.set(char, (s1Count.get(char) || 0) + 1);
  }
  
  let matches = 0;
  const required = s1Count.size;
  
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    s2Count.set(char, (s2Count.get(char) || 0) + 1);
    
    if (s1Count.has(char) && s2Count.get(char) === s1Count.get(char)) {
      matches++;
    }
    
    if (i >= s1.length) {
      const leftChar = s2[i - s1.length];
      if (s1Count.has(leftChar) && s2Count.get(leftChar) === s1Count.get(leftChar)) {
        matches--;
      }
      s2Count.set(leftChar, s2Count.get(leftChar) - 1);
    }
    
    if (matches === required) {
      return true;
    }
  }
  
  return false;
}
`;

const summary = TestRunner.run(checkInclusion, testCases, "Permutation in String", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 