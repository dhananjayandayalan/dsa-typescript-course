import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { romanToInt } from './question';

// Comprehensive test cases for Roman to Integer
const testCases: TestCase[] = [
  {
    input: { s: "III" },
    expectedOutput: 3,
    description: "Simple roman numeral"
  },
  {
    input: { s: "LVIII" },
    expectedOutput: 58,
    description: "Roman numeral with multiple symbols"
  },
  {
    input: { s: "MCMXCIV" },
    expectedOutput: 1994,
    description: "Complex roman numeral with subtraction"
  },
  {
    input: { s: "I" },
    expectedOutput: 1,
    description: "Single symbol"
  },
  {
    input: { s: "IV" },
    expectedOutput: 4,
    description: "Subtraction case I before V"
  },
  {
    input: { s: "IX" },
    expectedOutput: 9,
    description: "Subtraction case I before X"
  },
  {
    input: { s: "XL" },
    expectedOutput: 40,
    description: "Subtraction case X before L"
  },
  {
    input: { s: "XC" },
    expectedOutput: 90,
    description: "Subtraction case X before C"
  },
  {
    input: { s: "CD" },
    expectedOutput: 400,
    description: "Subtraction case C before D"
  },
  {
    input: { s: "CM" },
    expectedOutput: 900,
    description: "Subtraction case C before M"
  },
  {
    input: { s: "MMMCMXCIX" },
    expectedOutput: 3999,
    description: "Maximum valid roman numeral"
  },
  {
    input: { s: "MMMDCCXXIV" },
    expectedOutput: 3724,
    description: "Large roman numeral"
  }
];

// Run the tests
console.log("🧪 Testing Roman to Integer Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(n) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(n) - Functional Style)
function romanToInt(s: string): number {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return s.split('').reduce((acc, curr, i, arr) => {
    const currVal = values[curr as keyof typeof values];
    const nextVal = values[arr[i + 1] as keyof typeof values] || 0;
    return acc + (currVal < nextVal ? -currVal : currVal);
  }, 0);
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(romanToInt, testCases, "Roman to Integer", shorthandSolution);

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