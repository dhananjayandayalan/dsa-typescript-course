import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { isPalindrome } from './question';

// Comprehensive test cases for Palindrome Number
const testCases: TestCase[] = [
  {
    input: { x: 121 },
    expectedOutput: true,
    description: "Positive palindrome"
  },
  {
    input: { x: -121 },
    expectedOutput: false,
    description: "Negative number"
  },
  {
    input: { x: 10 },
    expectedOutput: false,
    description: "Non-palindrome with trailing zero"
  },
  {
    input: { x: 0 },
    expectedOutput: true,
    description: "Zero"
  },
  {
    input: { x: 12321 },
    expectedOutput: true,
    description: "Large palindrome"
  },
  {
    input: { x: 5 },
    expectedOutput: true,
    description: "Single digit"
  },
  {
    input: { x: 11 },
    expectedOutput: true,
    description: "Two digits palindrome"
  },
  {
    input: { x: 12 },
    expectedOutput: false,
    description: "Two digits non-palindrome"
  },
  {
    input: { x: 12345 },
    expectedOutput: false,
    description: "Large non-palindrome"
  },
  {
    input: { x: 1221 },
    expectedOutput: true,
    description: "Even digits palindrome"
  },
  {
    input: { x: 1234 },
    expectedOutput: false,
    description: "Even digits non-palindrome"
  },
  {
    input: { x: 99999 },
    expectedOutput: true,
    description: "All same digits"
  },
  {
    input: { x: 1234321 },
    expectedOutput: true,
    description: "Palindrome with different digits"
  }
];

// Run the tests
console.log("🧪 Testing Palindrome Number Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(log n) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(log n) - Functional Style)
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;
  
  let reversed = 0;
  let original = x;
  
  while (original > 0) {
    reversed = reversed * 10 + original % 10;
    original = Math.floor(original / 10);
  }
  
  return x === reversed;
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(isPalindrome, testCases, "Palindrome Number", shorthandSolution);

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