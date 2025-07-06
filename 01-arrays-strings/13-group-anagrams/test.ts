import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { groupAnagrams } from './question';

// Helper function to sort groups for comparison
function sortGroups(groups: string[][]): string[][] {
  return groups.map(group => group.sort()).sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return (a[0] || '').localeCompare(b[0] || '');
  });
}

const testCases: TestCase[] = [
  {
    input: { strs: ["eat","tea","tan","ate","nat","bat"] },
    expectedOutput: [["bat"],["nat","tan"],["ate","eat","tea"]],
    description: "Multiple anagram groups"
  },
  {
    input: { strs: [""] },
    expectedOutput: [[""]],
    description: "Empty string"
  },
  {
    input: { strs: ["a"] },
    expectedOutput: [["a"]],
    description: "Single character"
  },
  {
    input: { strs: ["abc","cba","bac","cab","acb","bca"] },
    expectedOutput: [["abc","acb","bac","bca","cab","cba"]],
    description: "All anagrams of same word"
  },
  {
    input: { strs: ["a","b","c"] },
    expectedOutput: [["a"],["b"],["c"]],
    description: "No anagrams"
  },
  {
    input: { strs: ["","",""] },
    expectedOutput: [["","",""]],
    description: "Multiple empty strings"
  }
];

console.log("🧪 Testing Group Anagrams Solution");
console.log("=" .repeat(60));

const shorthandSolution = `
function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map();
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(str);
  }
  return Array.from(groups.values());
}
`;

// Custom test runner for group anagrams
function runGroupAnagramsTests() {
  let passedTests = 0;
  let totalTests = testCases.length;
  let totalTime = 0;

  testCases.forEach((testCase, index) => {
    const startTime = performance.now();
    const result = groupAnagrams(testCase.input.strs);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    totalTime += executionTime;
    
    const sortedResult = sortGroups(result);
    const sortedExpected = sortGroups(testCase.expectedOutput);
    const passed = JSON.stringify(sortedResult) === JSON.stringify(sortedExpected);
    
    if (passed) passedTests++;
    
    console.log(`Test ${index + 1}: ${passed ? '✅ PASS' : '❌ FAIL'} - ${testCase.description}`);
    if (!passed) {
      console.log(`   Expected: ${JSON.stringify(sortedExpected)}`);
      console.log(`   Got: ${JSON.stringify(sortedResult)}`);
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

const summary = runGroupAnagramsTests();

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed!");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
}

console.log("=" .repeat(60)); 