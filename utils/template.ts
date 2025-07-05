// Template for DSA Questions
// Copy this structure for each new question

import { LeetCodeTestRunner } from './test-runner';

export interface Problem {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  examples: Array<{
    input: any;
    output: any;
    explanation?: string;
  }>;
  constraints: string[];
  leetcodeUrl?: string;
}

export interface TestCase {
  input: any;
  expectedOutput: any;
  description?: string;
}

// Example problem structure
export const exampleProblem: Problem = {
  title: "Two Sum",
  difficulty: "Easy",
  category: "Arrays & Strings",
  description: `
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
  `,
  examples: [
    {
      input: { nums: [2, 7, 11, 15], target: 9 },
      output: [0, 1],
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
    },
    {
      input: { nums: [3, 2, 4], target: 6 },
      output: [1, 2],
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
    }
  ],
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists."
  ],
  leetcodeUrl: "https://leetcode.com/problems/two-sum/"
};

// Function signature template
export function solveProblem(nums: number[], target: number): number[] {
  // Your solution here
  return [];
}

// Test cases template
export const testCases: TestCase[] = [
  {
    input: { nums: [2, 7, 11, 15], target: 9 },
    expectedOutput: [0, 1],
    description: "Basic case with two numbers that sum to target"
  },
  {
    input: { nums: [3, 2, 4], target: 6 },
    expectedOutput: [1, 2],
    description: "Target found with different indices"
  },
  {
    input: { nums: [3, 3], target: 6 },
    expectedOutput: [0, 1],
    description: "Same number used twice"
  },
  {
    input: { nums: [1, 5, 8, 10, 13, 15], target: 18 },
    expectedOutput: [[2, 3], [2, 5]],
    description: "Multiple valid solutions example"
  }
];

// Test runner template with shorthand solution
export function runTests() {
  console.log("Running tests...");
  
  const shorthandSolution = `
// Shorthand Solution (Simple but not optimal)
function solveProblem(input: any): any {
  // Your simple solution here
  return null;
}
  `;
  
  const summary = LeetCodeTestRunner.run(solveProblem, testCases, "Problem Name", shorthandSolution);
  
  // Show shorthand solution if all tests passed
  if (summary.failedTests === 0 && summary.shorthandSolution) {
    console.log("\n💡 Shorthand Solution (Not Optimal):");
    console.log(summary.shorthandSolution);
  }
}

// Uncomment to run tests
// runTests();

// To run tests: npm run runTest <question-folder> 