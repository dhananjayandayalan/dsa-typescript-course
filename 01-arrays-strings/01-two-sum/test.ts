import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { twoSum } from './question';

// Comprehensive test cases for Two Sum
const testCases: TestCase[] = [
  {
    input: { nums: [2, 7, 11, 15], target: 9 },
    expectedOutput: [0, 1],
    description: "Basic case with two numbers that sum to target"
  },
  {
    input: { nums: [3, 2, 4], target: 6 },
    expectedOutput: [1, 2],
    description: "Target found with different indices"  
  },
  {
    input: { nums: [3, 3], target: 6 },
    expectedOutput: [0, 1],
    description: "Same number used twice"
  },
  {
    input: { nums: [1, 5, 8, 10, 13, 15], target: 18 },
    expectedOutput: [[2, 3], [2, 5]],
    description: "Larger array with target at end (multiple valid solutions)"
  },
  {
    input: { nums: [0, 4, 3, 0], target: 0 },
    expectedOutput: [0, 3],
    description: "Target is zero with duplicate zeros"
  },
  {
    input: { nums: [-1, -2, -3, -4, -5], target: -8 },
    expectedOutput: [2, 4],
    description: "Negative numbers"
  },
  {
    input: { nums: [1, 2, 3, 4, 5], target: 9 },
    expectedOutput: [3, 4],
    description: "Consecutive numbers"
  },
  {
    input: { nums: [2, 5, 5, 11], target: 10 },
    expectedOutput: [1, 2],
    description: "Duplicate numbers that sum to target"
  },
  {
    input: { nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], target: 2 },
    expectedOutput: [0, 1],
    description: "Array with all same numbers"
  },
  {
    input: { nums: [1000000000, -1000000000], target: 0 },
    expectedOutput: [0, 1],
    description: "Large numbers at boundary"
  }
];

// Run the tests
console.log("🧪 Testing Two Sum Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(n) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(n) - Functional Style)
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map();
  const foundIndex = nums.findIndex((num, i) => {
    const complement = target - num;
    if (seen.has(complement)) return true;
    seen.set(num, i);
    return false;
  });
  return foundIndex !== -1 ? [seen.get(target - nums[foundIndex]), foundIndex] : [];
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(twoSum, testCases, "Two Sum", shorthandSolution);

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