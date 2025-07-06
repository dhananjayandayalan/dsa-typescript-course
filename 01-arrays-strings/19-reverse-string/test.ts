import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { reverseString } from './question';

function charsToString(chars: string[]): string {
  return chars.join('');
}

const testCases: TestCase[] = [
  { input: { s: ["h","e","l","l","o"] }, expectedOutput: ["o","l","l","e","h"], description: "Basic reverse" },
  { input: { s: ["H","a","n","n","a","h"] }, expectedOutput: ["h","a","n","n","a","H"], description: "Palindrome" },
  { input: { s: ["a"] }, expectedOutput: ["a"], description: "Single character" },
  { input: { s: ["a","b"] }, expectedOutput: ["b","a"], description: "Two characters" },
  { input: { s: ["A","B","C","D"] }, expectedOutput: ["D","C","B","A"], description: "Uppercase letters" },
  { input: { s: ["1","2","3","4","5"] }, expectedOutput: ["5","4","3","2","1"], description: "Digits" },
  { input: { s: ["!","@","#","$","%"] }, expectedOutput: ["%","$","#","@","!"], description: "Symbols" }
];

console.log("🧪 Testing Reverse String Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function reverseString(s: string[]): void {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}
`;

function runReverseStringTests() {
  let passedTests = 0;
  let totalTests = testCases.length;
  let totalTime = 0;

  testCases.forEach((testCase, index) => {
    const s = [...testCase.input.s];
    const startTime = performance.now();
    reverseString(s);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    totalTime += executionTime;
    const passed = charsToString(s) === charsToString(testCase.expectedOutput);
    if (passed) passedTests++;
    console.log(`Test ${index + 1}: ${passed ? '✅ PASS' : '❌ FAIL'} - ${testCase.description}`);
    if (!passed) {
      console.log(`   Expected: ${charsToString(testCase.expectedOutput)}`);
      console.log(`   Got: ${charsToString(s)}`);
    }
  });

  return {
    passedTests,
    failedTests: totalTests - passedTests,
    totalTests,
    totalExecutionTime: totalTime,
    averageExecutionTime: totalTime / totalTests,
    shorthandSolution
  };
}

const summary = runReverseStringTests();

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 