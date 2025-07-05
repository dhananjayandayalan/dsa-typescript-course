import { TestCase } from './template';

export interface TestResult {
  testCase: TestCase;
  passed: boolean;
  actualOutput: any;
  executionTime: number;
  memoryUsage?: number;
  error?: string;
}

export interface TestSummary {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  totalExecutionTime: number;
  averageExecutionTime: number;
  results: TestResult[];
  shorthandSolution?: string;
}

export class TestRunner {
  private testCases: TestCase[] = [];
  private solutionFunction: Function | null = null;
  private problemTitle: string = '';

  constructor(problemTitle: string = 'DSA Problem') {
    this.problemTitle = problemTitle;
  }

  setTestCases(testCases: TestCase[]): void {
    this.testCases = testCases;
  }

  setSolutionFunction(solutionFn: Function): void {
    this.solutionFunction = solutionFn;
  }

  private formatOutput(output: any): string {
    if (Array.isArray(output)) {
      return `[${output.join(', ')}]`;
    }
    if (typeof output === 'object' && output !== null) {
      return JSON.stringify(output);
    }
    return String(output);
  }

  private deepEqual(a: any, b: any): boolean {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (typeof a !== typeof b) return false;
    
    if (typeof a === 'object') {
      if (Array.isArray(a) !== Array.isArray(b)) return false;
      if (Array.isArray(a)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
          if (!this.deepEqual(a[i], b[i])) return false;
        }
        return true;
      }
      
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;
      
      for (const key of keysA) {
        if (!keysB.includes(key) || !this.deepEqual(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    
    return false;
  }

  private isAnyValidOutput(result: any, expectedOutputs: any[]): boolean {
    return expectedOutputs.some(expected => this.deepEqual(result, expected));
  }

  private executeWithTimeout(fn: Function, args: any[], timeoutMs: number = 5000): { result: any; executionTime: number; error?: string } {
    const startTime = performance.now();
    
    try {
      const result = fn(...args);
      const executionTime = performance.now() - startTime;
      
      if (executionTime > timeoutMs) {
        return { result: null, executionTime, error: 'Time Limit Exceeded' };
      }
      
      return { result, executionTime };
    } catch (error) {
      const executionTime = performance.now() - startTime;
      return { 
        result: null, 
        executionTime, 
        error: error instanceof Error ? error.message : 'Runtime Error' 
      };
    }
  }

  runTests(): TestSummary {
    if (!this.solutionFunction) {
      throw new Error('Solution function not set. Use setSolutionFunction() first.');
    }

    console.log(`\n🚀 Running tests for: ${this.problemTitle}`);
    console.log('=' .repeat(60));
    
    const results: TestResult[] = [];
    let totalExecutionTime = 0;
    let passedTests = 0;
    let failedTests = 0;

    this.testCases.forEach((testCase, index) => {
      console.log(`\n📋 Test Case ${index + 1}:`);
      console.log(`   Input: ${JSON.stringify(testCase.input)}`);
      console.log(`   Expected: ${this.formatOutput(testCase.expectedOutput)}`);
      
      if (testCase.description) {
        console.log(`   Description: ${testCase.description}`);
      }

      // Execute the solution
      let args: any[];
      if (Array.isArray(testCase.input)) {
        args = testCase.input;
      } else if (typeof testCase.input === 'object' && testCase.input !== null) {
        // If input is an object, spread its properties as arguments
        args = Object.values(testCase.input);
      } else {
        args = [testCase.input];
      }
      
      const { result, executionTime, error } = this.executeWithTimeout(
        this.solutionFunction!,
        args
      );

      totalExecutionTime += executionTime;
      
      if (error) {
        console.log(`   ❌ FAILED - ${error}`);
        console.log(`   ⏱️  Execution Time: ${executionTime.toFixed(2)}ms`);
        failedTests++;
        
        results.push({
          testCase,
          passed: false,
          actualOutput: null,
          executionTime,
          error
        });
      } else {
        // Handle multiple expected outputs
        const expectedOutputs = Array.isArray(testCase.expectedOutput) && testCase.expectedOutput.length > 0 && Array.isArray(testCase.expectedOutput[0]) 
          ? testCase.expectedOutput 
          : [testCase.expectedOutput];
        
        const passed = this.isAnyValidOutput(result, expectedOutputs);
        
        if (passed) {
          console.log(`   ✅ PASSED`);
          passedTests++;
        } else {
          console.log(`   ❌ FAILED`);
          console.log(`   Got: ${this.formatOutput(result)}`);
          if (expectedOutputs.length > 1) {
            console.log(`   Expected one of: ${expectedOutputs.map(output => this.formatOutput(output)).join(' OR ')}`);
          } else {
            console.log(`   Expected: ${this.formatOutput(testCase.expectedOutput)}`);
          }
          failedTests++;
        }
        
        console.log(`   ⏱️  Execution Time: ${executionTime.toFixed(2)}ms`);
        
        results.push({
          testCase,
          passed,
          actualOutput: result,
          executionTime
        });
      }
    });

    // Print summary
    console.log('\n' + '=' .repeat(60));
    console.log('📊 TEST SUMMARY:');
    console.log(`   Total Tests: ${this.testCases.length}`);
    console.log(`   ✅ Passed: ${passedTests}`);
    console.log(`   ❌ Failed: ${failedTests}`);
    console.log(`   ⏱️  Total Execution Time: ${totalExecutionTime.toFixed(2)}ms`);
    console.log(`   📈 Average Execution Time: ${(totalExecutionTime / this.testCases.length).toFixed(2)}ms`);
    
    if (failedTests === 0) {
      console.log('\n🎉 All tests passed! Your solution is correct.');
    } else {
      console.log(`\n⚠️  ${failedTests} test(s) failed. Please review your solution.`);
    }
    
    // Display detailed results for ALL tests
    console.log('\n📋 DETAILED TEST RESULTS:');
    console.log('─'.repeat(50));
    
    results.forEach((result, index) => {
      const status = result.passed ? '✅ PASSED' : '❌ FAILED';
      const statusColor = result.passed ? '\x1b[32m' : '\x1b[31m';
      
      console.log(`\n${statusColor}${status}\x1b[0m Test ${index + 1}:`);
      console.log(`   📝 Description: ${result.testCase.description}`);
      console.log(`   📥 Input: ${JSON.stringify(result.testCase.input)}`);
      console.log(`   🎯 Expected: ${JSON.stringify(result.testCase.expectedOutput)}`);
      console.log(`   📤 Got: ${JSON.stringify(result.actualOutput)}`);
      console.log(`   ⏱️  Time: ${result.executionTime.toFixed(2)}ms`);
      if (result.error) {
        console.log(`   💥 Error: ${result.error}`);
      }
    });
    
    console.log('=' .repeat(60) + '\n');

    return {
      totalTests: this.testCases.length,
      passedTests,
      failedTests,
      totalExecutionTime,
      averageExecutionTime: totalExecutionTime / this.testCases.length,
      results
    };
  }

  // Utility method to run tests with a simple interface
  static run(
    solutionFunction: Function,
    testCases: TestCase[],
    problemTitle: string = 'DSA Problem',
    shorthandSolution?: string
  ): TestSummary {
    const runner = new TestRunner(problemTitle);
    runner.setSolutionFunction(solutionFunction);
    runner.setTestCases(testCases);
    const summary = runner.runTests();
    if (shorthandSolution) {
      summary.shorthandSolution = shorthandSolution;
    }
    return summary;
  }
}

// Example usage:
/*
import { LeetCodeTestRunner } from './test-runner';

// Define your solution
function twoSum(nums: number[], target: number): number[] {
  // Your solution here
  return [];
}

// Define test cases
const testCases: TestCase[] = [
  {
    input: { nums: [2, 7, 11, 15], target: 9 },
    expectedOutput: [0, 1],
    description: "Basic case"
  },
  // ... more test cases
];

// Run tests
LeetCodeTestRunner.run(twoSum, testCases, "Two Sum");
*/ 