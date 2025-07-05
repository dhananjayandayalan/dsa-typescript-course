import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { isValid } from './question';

// Comprehensive test cases for Valid Parentheses
const testCases: TestCase[] = [
  {
    input: { s: "()" },
    expectedOutput: true,
    description: "Simple valid parentheses"
  },
  {
    input: { s: "()[]{}" },
    expectedOutput: true,
    description: "Multiple valid parentheses"
  },
  {
    input: { s: "(]" },
    expectedOutput: false,
    description: "Mismatched parentheses"
  },
  {
    input: { s: "([)]" },
    expectedOutput: false,
    description: "Wrong order of parentheses"
  },
  {
    input: { s: "{[]}" },
    expectedOutput: true,
    description: "Nested valid parentheses"
  },
  {
    input: { s: "(" },
    expectedOutput: false,
    description: "Single opening bracket"
  },
  {
    input: { s: ")" },
    expectedOutput: false,
    description: "Single closing bracket"
  },
  {
    input: { s: "(((" },
    expectedOutput: false,
    description: "Multiple opening brackets"
  },
  {
    input: { s: ")))" },
    expectedOutput: false,
    description: "Multiple closing brackets"
  },
  {
    input: { s: "([{}])" },
    expectedOutput: true,
    description: "Complex nested valid parentheses"
  },
  {
    input: { s: "([{])" },
    expectedOutput: false,
    description: "Complex nested invalid parentheses"
  },
  {
    input: { s: "" },
    expectedOutput: true,
    description: "Empty string"
  }
];

// Run the tests
console.log("🧪 Testing Valid Parentheses Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(n) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(n) - Functional Style)
function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };
  return s.split('').every(char => {
    if (pairs[char as keyof typeof pairs]) {
      stack.push(char);
      return true;
    }
    const top = stack.pop();
    return top && pairs[top as keyof typeof pairs] === char;
  }) && stack.length === 0;
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(isValid, testCases, "Valid Parentheses", shorthandSolution);

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