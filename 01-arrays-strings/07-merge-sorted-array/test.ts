import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { merge } from './question';

// Helper function to create test cases for merge function
function createMergeTestCase(nums1: number[], m: number, nums2: number[], n: number, expected: number[]): TestCase {
  return {
    input: { nums1: [...nums1], m, nums2: [...nums2], n },
    expectedOutput: expected,
    description: `Merge [${nums1.slice(0, m)}] and [${nums2}] into [${expected}]`
  };
}

// Comprehensive test cases for Merge Sorted Array
const testCases: TestCase[] = [
  createMergeTestCase([1,2,3,0,0,0], 3, [2,5,6], 3, [1,2,2,3,5,6]),
  createMergeTestCase([1], 1, [], 0, [1]),
  createMergeTestCase([0], 0, [1], 1, [1]),
  createMergeTestCase([1,2,3,4,0,0,0], 4, [5,6,7], 3, [1,2,3,4,5,6,7]),
  createMergeTestCase([5,6,7,0,0,0], 3, [1,2,3], 3, [1,2,3,5,6,7]),
  createMergeTestCase([1,3,5,0,0,0], 3, [2,4,6], 3, [1,2,3,4,5,6]),
  createMergeTestCase([1,1,1,0,0,0], 3, [1,1,1], 3, [1,1,1,1,1,1]),
  createMergeTestCase([1,2,3,4,5,0,0,0,0,0], 5, [6,7,8,9,10], 5, [1,2,3,4,5,6,7,8,9,10]),
  createMergeTestCase([10,20,30,0,0,0], 3, [5,15,25], 3, [5,10,15,20,25,30]),
  createMergeTestCase([1], 1, [2], 1, [1,2]),
  createMergeTestCase([2], 1, [1], 1, [1,2]),
  createMergeTestCase([0,0,0,0,0], 0, [1,2,3,4,5], 5, [1,2,3,4,5])
];

// Run the tests
console.log("🧪 Testing Merge Sorted Array Solution");
console.log("=" .repeat(60));

// Shorthand solution
const shorthandSolution = `
// Shorthand Solution (Merge from end)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1, j = n - 1, k = m + n - 1;
  
  while (i >= 0 && j >= 0) {
    nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
  
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}
`;

// Custom test runner for merge function
function runMergeTests() {
  let passedTests = 0;
  let totalTests = testCases.length;
  let totalTime = 0;
  const results: any[] = [];

  testCases.forEach((testCase, index) => {
    const startTime = performance.now();
    
    // Create a copy of the input arrays
    const nums1 = [...testCase.input.nums1];
    const nums2 = [...testCase.input.nums2];
    const m = testCase.input.m;
    const n = testCase.input.n;
    
    // Call the merge function
    merge(nums1, m, nums2, n);
    
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    totalTime += executionTime;
    
    // Check if the result matches expected
    const passed = JSON.stringify(nums1) === JSON.stringify(testCase.expectedOutput);
    if (passed) passedTests++;
    
    results.push({
      testCase,
      actualOutput: nums1,
      expectedOutput: testCase.expectedOutput,
      passed,
      executionTime
    });
    
    console.log(`Test ${index + 1}: ${passed ? '✅ PASS' : '❌ FAIL'} - ${testCase.description}`);
    if (!passed) {
      console.log(`   Expected: [${testCase.expectedOutput}]`);
      console.log(`   Got: [${nums1}]`);
    }
  });

  return {
    passedTests,
    failedTests: totalTests - passedTests,
    totalTests,
    totalExecutionTime: totalTime,
    averageExecutionTime: totalTime / totalTests,
    results,
    shorthandSolution
  };
}

const summary = runMergeTests();

console.log("\n📊 Summary:");
console.log(`   Passed: ${summary.passedTests}/${summary.totalTests}`);
console.log(`   Failed: ${summary.failedTests}/${summary.totalTests}`);
console.log(`   Success Rate: ${((summary.passedTests / summary.totalTests) * 100).toFixed(1)}%`);
console.log(`   Total Time: ${summary.totalExecutionTime.toFixed(2)}ms`);
console.log(`   Average Time: ${summary.averageExecutionTime.toFixed(2)}ms`);

if (summary.failedTests === 0) {
  console.log("\n🎉 All tests passed! Your solution is correct.");
  console.log("\n💡 Shorthand Solution:");
  console.log(summary.shorthandSolution);
} else {
  console.log(`\n⚠️  ${summary.failedTests} test(s) failed. Please review your solution.`);
}

console.log("=" .repeat(60)); 