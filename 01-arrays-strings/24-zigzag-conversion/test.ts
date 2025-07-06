import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { convert } from './question';

const testCases: TestCase[] = [
  { input: { s: "PAYPALISHIRING", numRows: 3 }, expectedOutput: "PAHNAPLSIIGYIR", description: "Example 1" },
  { input: { s: "PAYPALISHIRING", numRows: 4 }, expectedOutput: "PINALSIGYAHRPI", description: "Example 2" },
  { input: { s: "A", numRows: 1 }, expectedOutput: "A", description: "Single character" },
  { input: { s: "AB", numRows: 1 }, expectedOutput: "AB", description: "Two characters, one row" },
  { input: { s: "ABC", numRows: 2 }, expectedOutput: "ACB", description: "Two rows" },
  { input: { s: "ABCD", numRows: 2 }, expectedOutput: "ACBD", description: "Two rows, four characters" },
  { input: { s: "ABCDE", numRows: 4 }, expectedOutput: "ABCED", description: "Four rows, five characters" }
];

console.log("🧪 Testing Zigzag Conversion Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;
  const rows = Array.from({ length: numRows }, () => "");
  let curRow = 0, goingDown = false;
  for (const char of s) {
    rows[curRow] += char;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join("");
}
`;

const summary = TestRunner.run(convert, testCases, "Zigzag Conversion", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 