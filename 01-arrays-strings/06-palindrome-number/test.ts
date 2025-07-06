import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { isPalindrome } from './question';

// Comprehensive test cases for Palindrome Number
const testCases: TestCase[] = [
  {
    input: { x: 121 },
    expectedOutput: true,
    description: "Basic palindrome number"
  },
  {
    input: { x: -121 },
    expectedOutput: false,
    description: "Negative number is not palindrome"
  },
  {
    input: { x: 10 },
    expectedOutput: false,
    description: "Number ending with 0 is not palindrome"
  },
  {
    input: { x: 0 },
    expectedOutput: true,
    description: "Zero is a palindrome"
  },
  {
    input: { x: 1 },
    expectedOutput: true,
    description: "Single digit is always palindrome"
  },
  {
    input: { x: 12321 },
    expectedOutput: true,
    description: "Odd length palindrome"
  },
  {
    input: { x: 1221 },
    expectedOutput: true,
    description: "Even length palindrome"
  },
  {
    input: { x: 12345 },
    expectedOutput: false,
    description: "Non-palindrome number"
  },
  {
    input: { x: 1001 },
    expectedOutput: true,
    description: "Palindrome with zeros in middle"
  },
  {
    input: { x: 99999 },
    expectedOutput: true,
    description: "All same digits palindrome"
  },
  {
    input: { x: 12345678987654321 },
    expectedOutput: true,
    description: "Large palindrome number"
  },
  {
    input: { x: 12345678987654320 },
    expectedOutput: false,
    description: "Large non-palindrome number"
  }
];

// Run the tests
console.log("🧪 Testing Palindrome Number Solution");
console.log("=" .repeat(60));

// Shorthand solution
const shorthandSolution = `
// Shorthand Solution (Mathematical approach)
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
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 