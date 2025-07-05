import { TestRunner } from '../../utils/test-runner';
import { TestCase } from '../../utils/template';
import { merge } from './question';

// Comprehensive test cases for Merge Sorted Array
const testCases: TestCase[] = [
  {
    input: { 
      nums1: [1,2,3,0,0,0], 
      m: 3, 
      nums2: [2,5,6], 
      n: 3 
    },
    expectedOutput: [1,2,2,3,5,6],
    description: "Basic merge"
  },
  {
    input: { 
      nums1: [1], 
      m: 1, 
      nums2: [], 
      n: 0 
    },
    expectedOutput: [1],
    description: "Empty nums2"
  },
  {
    input: { 
      nums1: [0], 
      m: 0, 
      nums2: [1], 
      n: 1 
    },
    expectedOutput: [1],
    description: "Empty nums1"
  },
  {
    input: { 
      nums1: [1,3,5,0,0], 
      m: 3, 
      nums2: [2,4], 
      n: 2 
    },
    expectedOutput: [1,2,3,4,5],
    description: "nums1 larger than nums2"
  },
  {
    input: { 
      nums1: [1,0,0,0], 
      m: 1, 
      nums2: [2,3,4], 
      n: 3 
    },
    expectedOutput: [1,2,3,4],
    description: "nums2 larger than nums1"
  },
  {
    input: { 
      nums1: [0,0,0], 
      m: 0, 
      nums2: [1,2,3], 
      n: 3 
    },
    expectedOutput: [1,2,3],
    description: "All elements from nums2"
  },
  {
    input: { 
      nums1: [1,2,3,0], 
      m: 3, 
      nums2: [], 
      n: 0 
    },
    expectedOutput: [1,2,3,0],
    description: "All elements from nums1"
  },
  {
    input: { 
      nums1: [1,1,1,0,0], 
      m: 3, 
      nums2: [1,1], 
      n: 2 
    },
    expectedOutput: [1,1,1,1,1],
    description: "Equal elements"
  },
  {
    input: { 
      nums1: [-3,-1,0,0], 
      m: 3, 
      nums2: [-2], 
      n: 1 
    },
    expectedOutput: [-3,-2,-1,0],
    description: "Negative numbers"
  },
  {
    input: { 
      nums1: [2,0], 
      m: 1, 
      nums2: [1], 
      n: 1 
    },
    expectedOutput: [1,2],
    description: "Single element each"
  }
];

// Run the tests
console.log("🧪 Testing Merge Sorted Array Solution");
console.log("=" .repeat(60));

// Shorthand solution (same O(m + n) complexity, functional style)
const shorthandSolution = `
// Shorthand Solution (O(m + n) - Functional Style)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;  // pointer for nums1
  let p2 = n - 1;  // pointer for nums2
  let p = m + n - 1;  // pointer for result
  
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
}
`;

// Run tests using the LeetCode-style test runner
const summary = TestRunner.run(merge, testCases, "Merge Sorted Array", shorthandSolution);

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