import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { missingNumber } from './question';

// Comprehensive test cases for Missing Number
const testCases: TestCase[] = [
  {
    input: { nums: [3, 0, 1] },
    expectedOutput: 2,
    description: "Missing number in middle"
  },
  {
    input: { nums: [0, 1] },
    expectedOutput: 2,
    description: "Missing number at end"
  },
  {
    input: { nums: [9, 6, 4, 2, 3, 5, 7, 0, 1] },
    expectedOutput: 8,
    description: "Large array with missing number"
  },
  {
    input: { nums: [0] },
    expectedOutput: 1,
    description: "Single element array"
  },
  {
    input: { nums: [1] },
    expectedOutput: 0,
    description: "Missing zero"
  },
  {
    input: { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
    expectedOutput: 10,
    description: "Missing number at end of sequence"
  },
  {
    input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    expectedOutput: 0,
    description: "Missing zero at beginning"
  },
  {
    input: { nums: [0, 1, 2, 3, 4, 6, 7, 8, 9, 10] },
    expectedOutput: 5,
    description: "Missing number in middle of sequence"
  },
  {
    input: { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] },
    expectedOutput: 100,
    description: "Very large array missing last number"
  },
  {
    input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] },
    expectedOutput: 0,
    description: "Very large array missing first number"
  }
];

// Run the tests
console.log("🧪 Testing Missing Number Solution");
console.log("=" .repeat(60));

// Shorthand solution
const shorthandSolution = `
// Shorthand Solution (Mathematical approach)
function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(missingNumber, testCases, "Missing Number", shorthandSolution);

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