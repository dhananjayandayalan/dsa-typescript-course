import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { romanToInt } from './question';

// Comprehensive test cases for Roman to Integer
const testCases: TestCase[] = [
  {
    input: { s: 'III' },
    expectedOutput: 3,
    description: "Basic single characters"
  },
  {
    input: { s: 'LVIII' },
    expectedOutput: 58,
    description: "Simple addition"
  },
  {
    input: { s: 'MCMXCIV' },
    expectedOutput: 1994,
    description: "Complex with subtraction"
  },
  {
    input: { s: 'I' },
    expectedOutput: 1,
    description: "Single character I"
  },
  {
    input: { s: 'V' },
    expectedOutput: 5,
    description: "Single character V"  
  },
  {
    input: { s: 'IV' },
    expectedOutput: 4,
    description: "Subtraction case IV"
  },
  {
    input: { s: 'IX' },
    expectedOutput: 9,
    description: "Subtraction case IX"
  },
  {
    input: { s: 'XL' },
    expectedOutput: 40,
    description: "Subtraction case XL"
  },
  {
    input: { s: 'XC' },
    expectedOutput: 90,
    description: "Subtraction case XC"
  },
  {
    input: { s: 'CD' },
    expectedOutput: 400,
    description: "Subtraction case CD"
  },
  {
    input: { s: 'CM' },
    expectedOutput: 900,
    description: "Subtraction case CM"
  },
  {
    input: { s: 'MMMCMXCIX' },
    expectedOutput: 3999,
    description: "Large number"
  },
  {
    input: { s: 'MMDCCLXXVII' },
    expectedOutput: 2777,
    description: "Medium number"
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
  let result = 0, prev = 0;
  
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = values[s[i]];
    result += curr < prev ? -curr : curr;
    prev = curr;
  }
  
  return result;
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