import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { containsDuplicate } from './question';

// Comprehensive test cases for Contains Duplicate
const testCases: TestCase[] = [
  {
    input: { nums: [1, 2, 3, 1] },
    expectedOutput: true,
    description: "Array with duplicates"
  },
  {
    input: { nums: [1, 2, 3, 4] },
    expectedOutput: false,
    description: "Array without duplicates"
  },
  {
    input: { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] },
    expectedOutput: true,
    description: "Array with multiple duplicates"
  },
  {
    input: { nums: [1] },
    expectedOutput: false,
    description: "Single element array"
  },
  {
    input: { nums: [1, 1] },
    expectedOutput: true,
    description: "Two identical elements"
  },
  {
    input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    expectedOutput: false,
    description: "Large array without duplicates"
  },
  {
    input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1] },
    expectedOutput: true,
    description: "Large array with duplicate at end"
  },
  {
    input: { nums: [0, 0, 0, 0, 0] },
    expectedOutput: true,
    description: "All elements are the same"
  },
  {
    input: { nums: [-1, -2, -3, -1] },
    expectedOutput: true,
    description: "Negative numbers with duplicates"
  },
  {
    input: { nums: [1000000000, -1000000000, 1000000000] },
    expectedOutput: true,
    description: "Large numbers with duplicates"
  },
  {
    input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    expectedOutput: false,
    description: "Very large array without duplicates"
  },
  {
    input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1] },
    expectedOutput: true,
    description: "Very large array with duplicate at end"
  }
];

// Run the tests
console.log("🧪 Testing Contains Duplicate Solution");
console.log("=" .repeat(60));

// Shorthand solution
const shorthandSolution = `
// Shorthand Solution (Hash Set)
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(containsDuplicate, testCases, "Contains Duplicate", shorthandSolution);

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
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 