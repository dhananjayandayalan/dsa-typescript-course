import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { countAndSay } from './question';

const testCases: TestCase[] = [
  { input: { n: 1 }, expectedOutput: "1", description: "Base case" },
  { input: { n: 2 }, expectedOutput: "11", description: "Second term" },
  { input: { n: 3 }, expectedOutput: "21", description: "Third term" },
  { input: { n: 4 }, expectedOutput: "1211", description: "Fourth term" },
  { input: { n: 5 }, expectedOutput: "111221", description: "Fifth term" },
  { input: { n: 6 }, expectedOutput: "312211", description: "Sixth term" },
  { input: { n: 7 }, expectedOutput: "13112221", description: "Seventh term" },
  { input: { n: 8 }, expectedOutput: "1113213211", description: "Eighth term" }
];

console.log("🧪 Testing Count and Say Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function countAndSay(n: number): string {
  let res = "1";
  for (let i = 1; i < n; i++) {
    let next = "";
    let count = 1;
    for (let j = 1; j <= res.length; j++) {
      if (res[j] === res[j - 1]) {
        count++;
      } else {
        next += count + res[j - 1];
        count = 1;
      }
    }
    res = next;
  }
  return res;
}
`;

const summary = TestRunner.run(countAndSay, testCases, "Count and Say", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 