import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { intToRoman } from './question';

const testCases: TestCase[] = [
  { input: { num: 3 }, expectedOutput: "III", description: "Simple case" },
  { input: { num: 4 }, expectedOutput: "IV", description: "Subtractive notation" },
  { input: { num: 9 }, expectedOutput: "IX", description: "Subtractive notation" },
  { input: { num: 58 }, expectedOutput: "LVIII", description: "Multiple numerals" },
  { input: { num: 1994 }, expectedOutput: "MCMXCIV", description: "Complex case" },
  { input: { num: 1 }, expectedOutput: "I", description: "Minimum value" },
  { input: { num: 3999 }, expectedOutput: "MMMCMXCIX", description: "Maximum value" }
];

console.log("🧪 Testing Integer to Roman Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function intToRoman(num: number): string {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syb = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let res = "";
  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      num -= val[i];
      res += syb[i];
    }
  }
  return res;
}
`;

const summary = TestRunner.run(intToRoman, testCases, "Integer to Roman", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 