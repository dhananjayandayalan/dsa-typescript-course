import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { compress } from './question';

function charsToString(chars: string[], len: number): string {
  return chars.slice(0, len).join('');
}

const testCases: TestCase[] = [
  { input: { chars: ["a","a","b","b","c","c","c"] }, expectedOutput: 6, description: "Basic compression" },
  { input: { chars: ["a"] }, expectedOutput: 1, description: "Single character" },
  { input: { chars: ["a","b","b","b","b","b","b","b","b","b","b","b","b"] }, expectedOutput: 4, description: "Long run compression" },
  { input: { chars: ["a","a","a","b","b","a","a"] }, expectedOutput: 6, description: "Multiple groups" },
  { input: { chars: ["a","b","c"] }, expectedOutput: 3, description: "No compression needed" },
  { input: { chars: ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"] }, expectedOutput: 4, description: "Very long run compression" },
  { input: { chars: ["a","b","c","c","c","d","d","e","e","e","e"] }, expectedOutput: 8, description: "Mixed groups" }
];

console.log("🧪 Testing String Compression Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function compress(chars: string[]): number {
  let write = 0, read = 0;
  while (read < chars.length) {
    let char = chars[read];
    let start = read;
    while (read < chars.length && chars[read] === char) read++;
    chars[write++] = char;
    let count = read - start;
    if (count > 1) {
      for (const digit of String(count)) {
        chars[write++] = digit;
      }
    }
  }
  return write;
}
`;

function runCompressionTests() {
  let passedTests = 0;
  let totalTests = testCases.length;
  let totalTime = 0;

  testCases.forEach((testCase, index) => {
    const chars = [...testCase.input.chars];
    const startTime = performance.now();
    const result = compress(chars);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    totalTime += executionTime;
    const passed = result === testCase.expectedOutput;
    if (passed) passedTests++;
    console.log(`Test ${index + 1}: ${passed ? '✅ PASS' : '❌ FAIL'} - ${testCase.description}`);
    if (!passed) {
      console.log(`   Expected length: ${testCase.expectedOutput}`);
      console.log(`   Got: ${result}`);
      console.log(`   Output chars: ${charsToString(chars, result)}`);
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

const summary = runCompressionTests();

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 