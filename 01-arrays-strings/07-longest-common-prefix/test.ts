import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { longestCommonPrefix } from './question';

// Comprehensive test cases for Longest Common Prefix
const testCases: TestCase[] = [
  {
    input: { strs: ["flower","flow","flight"] },
    expectedOutput: "fl",
    description: "Basic common prefix"
  },
  {
    input: { strs: ["dog","racecar","car"] },
    expectedOutput: "",
    description: "No common prefix"
  },
  {
    input: { strs: ["interspecies","interstellar","interstate"] },
    expectedOutput: "inters",
    description: "Long common prefix"
  },
  {
    input: { strs: ["throne","throne"] },
    expectedOutput: "throne",
    description: "Identical strings"
  },
  {
    input: { strs: ["hello"] },
    expectedOutput: "hello",
    description: "Single string"
  },
  {
    input: { strs: ["hello",""] },
    expectedOutput: "",
    description: "Empty string in array"
  },
  {
    input: { strs: ["","",""] },
    expectedOutput: "",
    description: "All empty strings"
  },
  {
    input: { strs: ["a","ab","abc"] },
    expectedOutput: "a",
    description: "Short common prefix"
  },
  {
    input: { strs: ["aa","a"] },
    expectedOutput: "a",
    description: "Different lengths"
  },
  {
    input: { strs: ["abc","def","ghi"] },
    expectedOutput: "",
    description: "No common prefix with first char"
  },
  {
    input: { strs: ["test123","test456","test789"] },
    expectedOutput: "test",
    description: "Common prefix with numbers"
  },
  {
    input: { strs: ["a","a","a"] },
    expectedOutput: "a",
    description: "Single character strings"
  }
];

// Run the tests
console.log("🧪 Testing Longest Common Prefix Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(S) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(S) - Functional Style)
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const char = first[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return first.substring(0, i);
      }
    }
  }
  
  return first;
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