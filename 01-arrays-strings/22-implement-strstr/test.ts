import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { strStr } from './question';

const testCases: TestCase[] = [
  { input: { haystack: "hello", needle: "ll" }, expectedOutput: 2, description: "Basic substring" },
  { input: { haystack: "aaaaa", needle: "bba" }, expectedOutput: -1, description: "Not found" },
  { input: { haystack: "", needle: "" }, expectedOutput: 0, description: "Both empty" },
  { input: { haystack: "a", needle: "a" }, expectedOutput: 0, description: "Single character match" },
  { input: { haystack: "mississippi", needle: "issip" }, expectedOutput: 4, description: "Complex case" },
  { input: { haystack: "abc", needle: "c" }, expectedOutput: 2, description: "Last character match" },
  { input: { haystack: "abc", needle: "d" }, expectedOutput: -1, description: "No match at all" },
  { input: { haystack: "abc", needle: "" }, expectedOutput: 0, description: "Empty needle" },
  { input: { haystack: "", needle: "a" }, expectedOutput: -1, description: "Empty haystack, non-empty needle" }
];

console.log("🧪 Testing Implement strStr() Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;
  return haystack.indexOf(needle);
}
`;

const summary = TestRunner.run(strStr, testCases, "Implement strStr()", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 