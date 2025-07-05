import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { removeDuplicates } from './question';

// Comprehensive test cases for Remove Duplicates
const testCases: TestCase[] = [
  {
    input: { nums: [1, 1, 2] },
    expectedOutput: 2,
    description: "Simple case with one duplicate"
  },
  {
    input: { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] },
    expectedOutput: 5,
    description: "Multiple duplicates"
  },
  {
    input: { nums: [1, 2, 3] },
    expectedOutput: 3,
    description: "No duplicates"
  },
  {
    input: { nums: [1, 1, 1, 1] },
    expectedOutput: 1,
    description: "All same elements"
  },
  {
    input: { nums: [1] },
    expectedOutput: 1,
    description: "Single element"
  },
  {
    input: { nums: [] },
    expectedOutput: 0,
    description: "Empty array"
  },
  {
    input: { nums: [-1, -1, 0, 0, 1, 1, 2, 2] },
    expectedOutput: 4,
    description: "Negative numbers with duplicates"
  },
  {
    input: { nums: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4] },
    expectedOutput: 4,
    description: "Increasing number of duplicates"
  },
  {
    input: { nums: [0, 0, 0, 0, 0] },
    expectedOutput: 1,
    description: "All zeros"
  },
  {
    input: { nums: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5] },
    expectedOutput: 5,
    description: "Alternating duplicates"
  }
];

// Run the tests
console.log("🧪 Testing Remove Duplicates Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(n) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(n) - Functional Style)
function removeDuplicates(nums: number[]): number {
  return nums.reduce((acc, curr, i) => {
    if (i === 0 || curr !== nums[i - 1]) {
      nums[acc] = curr;
      return acc + 1;
    }
    return acc;
  }, 0);
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(removeDuplicates, testCases, "Remove Duplicates", shorthandSolution);

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