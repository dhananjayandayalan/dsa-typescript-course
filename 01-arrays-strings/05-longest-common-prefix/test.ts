import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { longestCommonPrefix } from './question';

// Comprehensive test cases for Longest Common Prefix
const testCases: TestCase[] = [
  {
    input: { strs: ["flower", "flow", "flight"] },
    expectedOutput: "fl",
    description: "Common prefix exists"
  },
  {
    input: { strs: ["dog", "racecar", "car"] },
    expectedOutput: "",
    description: "No common prefix"
  },
  {
    input: { strs: ["interspecies", "interstellar", "interstate"] },
    expectedOutput: "inters",
    description: "Long common prefix"
  },
  {
    input: { strs: ["throne", "throne"] },
    expectedOutput: "throne",
    description: "Identical strings"
  },
  {
    input: { strs: ["", "b"] },
    expectedOutput: "",
    description: "Empty string in array"
  },
  {
    input: { strs: ["a"] },
    expectedOutput: "a",
    description: "Single string"
  },
  {
    input: { strs: ["", ""] },
    expectedOutput: "",
    description: "Two empty strings"
  },
  {
    input: { strs: ["abc", "abc", "abc"] },
    expectedOutput: "abc",
    description: "All identical strings"
  },
  {
    input: { strs: ["abc", "def", "ghi"] },
    expectedOutput: "",
    description: "No common prefix at all"
  },
  {
    input: { strs: ["prefix", "prefixx", "prefixxx"] },
    expectedOutput: "prefix",
    description: "Common prefix with varying lengths"
  },
  {
    input: { strs: ["a", "ab", "abc"] },
    expectedOutput: "a",
    description: "Single character common prefix"
  },
  {
    input: { strs: ["leetcode", "leet", "leets"] },
    expectedOutput: "leet",
    description: "Common prefix with different endings"
  }
];

// Run the tests
console.log("🧪 Testing Longest Common Prefix Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(n*m) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(n*m) - Functional Style)
function longestCommonPrefix(strs: string[]): string {
  return strs.reduce((prefix, str) => {
    return str.slice(0, prefix.length).startsWith(prefix) ? prefix : 
           prefix.slice(0, str.length).startsWith(str.slice(0, prefix.length)) ? str.slice(0, prefix.length) : "";
  }, strs[0] || "");
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(longestCommonPrefix, testCases, "Longest Common Prefix", shorthandSolution);

// Display detailed results for failed tests
console.log("\n📋 Failed Test Details:");
let failedCount = 0;
summary.results.forEach((result, index) => {
  if (!result.passed) {
    failedCount++;
    console.log(`\n❌ Test ${index + 1} failed:`);
    console.log(`   Description: ${result.testCase.description}`);
    console.log(`   Input: ${JSON.stringify(result.testCase.input)}`);
    console.log(`   Expected: ${JSON.stringify(result.testCase.expectedOutput)}`);
    console.log(`   Got: ${JSON.stringify(result.actualOutput)}`);
    console.log(`   Time: ${result.executionTime.toFixed(2)}ms`);
  }
});

if (failedCount === 0) {
  console.log("\n🎉 All tests passed! Your solution is correct.");
} else {
  console.log(`\n⚠️  ${failedCount} test(s) failed. Please review your solution.`);
}

// Performance analysis
console.log("\n📊 Performance Analysis:");
console.log(`   Total Execution Time: ${summary.totalExecutionTime.toFixed(2)}ms`);
console.log(`   Average Execution Time: ${summary.averageExecutionTime.toFixed(2)}ms`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

// Show shorthand solution if all tests passed
if (summary.failedTests === 0 && summary.shorthandSolution) {
  console.log("\n💡 Shorthand Solution (Not Optimal):");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 