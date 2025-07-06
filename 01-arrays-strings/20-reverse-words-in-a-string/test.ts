import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { reverseWords } from './question';

const testCases: TestCase[] = [
  { input: { s: "the sky is blue" }, expectedOutput: "blue is sky the", description: "Basic reverse" },
  { input: { s: "  hello world  " }, expectedOutput: "world hello", description: "Leading and trailing spaces" },
  { input: { s: "a good   example" }, expectedOutput: "example good a", description: "Multiple spaces between words" },
  { input: { s: "one" }, expectedOutput: "one", description: "Single word" },
  { input: { s: "  a  b  c  " }, expectedOutput: "c b a", description: "Spaces between single characters" },
  { input: { s: "   " }, expectedOutput: "", description: "Only spaces" },
  { input: { s: "word1 word2 word3" }, expectedOutput: "word3 word2 word1", description: "Three words" }
];

console.log("🧪 Testing Reverse Words in a String Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ');
}
`;

const summary = TestRunner.run(reverseWords, testCases, "Reverse Words in a String", shorthandSolution);

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 