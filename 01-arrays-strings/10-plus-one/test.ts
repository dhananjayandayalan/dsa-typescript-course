import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { plusOne } from './question';

// Comprehensive test cases for Plus One
const testCases: TestCase[] = [
  {
    input: { digits: [1,2,3] },
    expectedOutput: [1,2,4],
    description: "Simple increment"
  },
  {
    input: { digits: [4,3,2,1] },
    expectedOutput: [4,3,2,2],
    description: "No carry needed"
  },
  {
    input: { digits: [9] },
    expectedOutput: [1,0],
    description: "Single digit with carry"
  },
  {
    input: { digits: [9,9,9] },
    expectedOutput: [1,0,0,0],
    description: "Multiple nines with carry"
  },
  {
    input: { digits: [5] },
    expectedOutput: [6],
    description: "Single digit no carry"
  },
  {
    input: { digits: [1,9,9] },
    expectedOutput: [2,0,0],
    description: "Mixed digits with carry"
  },
  {
    input: { digits: [0] },
    expectedOutput: [1],
    description: "All zeros"
  },
  {
    input: { digits: [1,2,3,4,5] },
    expectedOutput: [1,2,3,4,6],
    description: "Large number no carry"
  },
  {
    input: { digits: [1,2,3,9,9] },
    expectedOutput: [1,2,4,0,0],
    description: "Large number with carry"
  },
  {
    input: { digits: [9,9,9,9] },
    expectedOutput: [1,0,0,0,0],
    description: "All nines"
  },
  {
    input: { digits: [1,2,9] },
    expectedOutput: [1,3,0],
    description: "One nine at end"
  },
  {
    input: { digits: [9,9,8] },
    expectedOutput: [9,9,9],
    description: "Multiple carries"
  }
];

// Run the tests
console.log("🧪 Testing Plus One Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(n) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(n) - Functional Style)
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  
  return [1, ...digits];
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(plusOne, testCases, "Plus One", shorthandSolution);

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