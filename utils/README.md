# Test Runner Documentation

## 🚀 LeetCode-Style Test Runner

The `test-runner.ts` provides a comprehensive testing framework that simulates the LeetCode experience with detailed reporting.

## 📋 Features

- ✅ **Detailed Test Reporting**: Shows which tests passed/failed with execution times
- ⏱️ **Performance Monitoring**: Tracks execution time for each test case
- 🛡️ **Error Handling**: Catches runtime errors and time limit exceeded
- 📊 **Summary Statistics**: Provides overall test statistics
- 🎯 **Deep Comparison**: Handles complex data structures (arrays, objects, nested structures)
- 💡 **Shorthand Solutions**: Shows simple (non-optimal) solutions when tests fail
- 🎓 **Learning Progression**: Helps you start with simple solutions, then learn optimal ones

## 🛠️ Usage

### Basic Usage

```typescript
import { LeetCodeTestRunner } from './utils/test-runner';
import { TestCase } from './utils/template';

// Define your solution
function mySolution(input: any): any {
  // Your implementation here
  return null;
}

// Define test cases
const testCases: TestCase[] = [
  {
    input: { /* your input */ },
    expectedOutput: /* expected result */,
    description: "Test case description"
  }
];

// Run tests
const summary = LeetCodeTestRunner.run(mySolution, testCases, "Problem Name");

// Optional: Add shorthand solution for when all tests pass
const shorthandSolution = `
// Simple solution (not optimal)
function mySolution(input: any): any {
  // Your simple implementation here
  return null;
}
`;

const summaryWithShorthand = LeetCodeTestRunner.run(
  mySolution, 
  testCases, 
  "Problem Name", 
  shorthandSolution
);
```

### Advanced Usage

```typescript
import { LeetCodeTestRunner } from './utils/test-runner';

const runner = new LeetCodeTestRunner("My Problem");
runner.setSolutionFunction(mySolution);
runner.setTestCases(testCases);
const summary = runner.runTests();
```

## 📝 Question File Structure

Each question should follow this structure:

```typescript
import { LeetCodeTestRunner } from '../utils/test-runner';
import { TestCase } from '../utils/template';

// Problem description
// Your solution function
function solveProblem(input: any): any {
  // TODO: Implement your solution
  return null;
}

// Test cases
const testCases: TestCase[] = [
  {
    input: { /* input data */ },
    expectedOutput: /* expected result */,
    description: "Test case description"
  }
];

// Shorthand solution (appears when all tests pass)
const shorthandSolution = `
// Simple solution (not optimal)
function solveProblem(input: any): any {
  // Your simple implementation here
  return null;
}
`;

// Run tests with shorthand solution
const summary = LeetCodeTestRunner.run(
  solveProblem, 
  testCases, 
  "Problem Name", 
  shorthandSolution
);
```

## 🎯 Running Questions

### Method 1: Using npm script
```bash
npm run runTest 01-arrays-strings/two-sum
```

### Method 2: Direct ts-node
```bash
npx ts-node 01-arrays-strings/two-sum/test.ts
```

### Method 3: Using the run script
```bash
npx ts-node run-question.ts 01-arrays-strings/two-sum
```

## 📊 Test Output Example

```
🚀 Running tests for: Two Sum
============================================================

📋 Test Case 1:
   Input: {"nums":[2,7,11,15],"target":9}
   Expected: [0, 1]
   Description: Basic case with two numbers that sum to target
   ❌ FAILED
   Got: []
   ⏱️  Execution Time: 0.12ms

📋 Test Case 2:
   Input: {"nums":[3,2,4],"target":6}
   Expected: [1, 2]
   Description: Target found with different indices
   ❌ FAILED
   Got: []
   ⏱️  Execution Time: 0.08ms

============================================================
📊 TEST SUMMARY:
   Total Tests: 6
   ✅ Passed: 0
   ❌ Failed: 6
   ⏱️  Total Execution Time: 0.85ms
   📈 Average Execution Time: 0.14ms

🎉 All tests passed! Your solution is correct.

💡 Shorthand Solution (Not Optimal):
// Shorthand Solution (O(n²) - Brute Force)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
============================================================
```

## 🔧 Customization

### Timeout Configuration
The test runner has a default timeout of 5000ms. You can modify this in the `executeWithTimeout` method.

### Output Formatting
The `formatOutput` method handles different data types. You can customize it for specific needs.

### Deep Comparison
The `deepEqual` method handles complex comparisons. It supports:
- Primitive types
- Arrays (with order)
- Objects (with key order)
- Nested structures

## 💡 Tips

1. **Test Case Design**: Include edge cases, boundary conditions, and typical scenarios
2. **Descriptions**: Use clear descriptions for test cases to understand what's being tested
3. **Performance**: Monitor execution times to ensure your solution is efficient
4. **Error Handling**: The runner catches runtime errors and displays them clearly
5. **Shorthand Solutions**: Show simple solutions when all tests pass for comparison
6. **Learning Progression**: Compare your solution with simpler alternatives

## 🎯 Example: Complete Question

See `01-arrays-strings/two-sum/` for a complete example of how to structure a question with the test runner:
- `question.ts` - Problem statement and function signature
- `test.ts` - Test cases and test runner with shorthand solution 