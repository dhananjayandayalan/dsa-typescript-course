import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { minWindow } from './question';

const testCases: TestCase[] = [
  { input: { s: "ADOBECODEBANC", t: "ABC" }, expectedOutput: "BANC", description: "Classic minimum window case" },
  { input: { s: "a", t: "a" }, expectedOutput: "a", description: "Single character match" },
  { input: { s: "a", t: "aa" }, expectedOutput: "", description: "Impossible to match" },
  { input: { s: "aa", t: "aa" }, expectedOutput: "aa", description: "Exact match" },
  { input: { s: "abc", t: "ac" }, expectedOutput: "abc", description: "All characters needed" },
  { input: { s: "abc", t: "b" }, expectedOutput: "b", description: "Single character target" },
  { input: { s: "ADOBECODEBANC", t: "ABC" }, expectedOutput: "BANC", description: "Complex case" },
  { input: { s: "a", t: "b" }, expectedOutput: "", description: "No match possible" },
  { input: { s: "ab", t: "a" }, expectedOutput: "a", description: "First character match" },
  { input: { s: "ab", t: "b" }, expectedOutput: "b", description: "Second character match" },
  { input: { s: "abc", t: "abc" }, expectedOutput: "abc", description: "Exact string match" },
  { input: { s: "ADOBECODEBANC", t: "ABC" }, expectedOutput: "BANC", description: "Repeated test case" }
];

console.log("🧪 Testing Minimum Window Substring Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";
  
  const need = new Map();
  const window = new Map();
  
  for (const char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }
  
  let left = 0, right = 0;
  let valid = 0;
  let start = 0, len = Infinity;
  
  while (right < s.length) {
    const c = s[right];
    right++;
    
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }
    
    while (valid === need.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      
      const d = s[left];
      left++;
      
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }
  
  return len === Infinity ? "" : s.substring(start, start + len);
}
`;

const summary = TestRunner.run(minWindow, testCases, "Minimum Window Substring", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 