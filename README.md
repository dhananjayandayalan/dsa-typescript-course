# DSA TypeScript Learning Playground

A comprehensive local playground for learning Data Structures and Algorithms using TypeScript, designed to provide a LeetCode-like experience with structured learning paths.

## 🎯 Learning Path

This repository is organized into progressive difficulty levels and categories to ensure systematic learning:

### 📁 Folder Structure

```
dsa-typescript-course/
├── 01-arrays-strings/           # Basic array and string manipulation
├── 02-two-pointers/            # Two pointer techniques
├── 03-sliding-window/          # Sliding window patterns
├── 04-binary-search/           # Binary search variations
├── 05-linked-lists/            # Linked list operations
├── 06-stacks-queues/           # Stack and queue implementations
├── 07-trees-binary-trees/      # Tree data structures
├── 08-heaps-priority-queues/   # Heap and priority queue
├── 09-graphs/                  # Graph algorithms
├── 10-dynamic-programming/     # DP patterns and techniques
├── 11-backtracking/            # Backtracking algorithms
├── 12-greedy/                  # Greedy algorithms
├── 13-bit-manipulation/        # Bit manipulation tricks
├── 14-math/                    # Mathematical algorithms
├── 15-design/                  # System design and OOP
├── 16-advanced-algorithms/     # Advanced techniques
└── utils/                      # Common utilities and helpers
```

## 🚀 How to Use

Each question folder will contain:
- `question.ts` - Problem statement and function signature
- `test.ts` - Comprehensive test cases and test runner

## 📚 Learning Progression

### Beginner Level (01-04)
- **Arrays & Strings**: Basic manipulation, frequency counting
- **Two Pointers**: Fast/slow, left/right pointer techniques
- **Sliding Window**: Fixed and variable window sizes
- **Binary Search**: Standard and modified binary search

### Intermediate Level (05-09)
- **Linked Lists**: Cycle detection, reversal, merging
- **Stacks & Queues**: Implementation and applications
- **Trees**: Traversal, BST operations, tree construction
- **Heaps**: Min/max heap operations
- **Graphs**: DFS, BFS, shortest path algorithms

### Advanced Level (10-13)
- **Dynamic Programming**: Memoization, tabulation, state compression
- **Backtracking**: Recursive exploration with pruning
- **Greedy**: Optimal local choices
- **Bit Manipulation**: Bitwise operations and tricks

### Expert Level (14-16)
- **Math**: Number theory, combinatorics
- **Design**: System design, OOP patterns
- **Advanced Algorithms**: Advanced techniques and optimizations

## 🛠️ Setup

1. Install TypeScript: `npm install -g typescript`
2. Install ts-node for running: `npm install -g ts-node`
3. Run questions: `npm run runTest question-folder` or `npx ts-node run-question.ts question-folder`

## 🎯 Benefits

- **Structured Learning**: Progressive difficulty ensures solid foundation
- **Pattern Recognition**: Each category focuses on specific problem-solving patterns
- **Local Development**: Full IDE support with debugging capabilities
- **Comprehensive Testing**: Thorough test cases for validation
- **TypeScript Benefits**: Type safety and better code organization

## 📝 Question Template

Each question will follow this structure:
```typescript
// question.ts
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
}

export function solveProblem(input: any): any {
  // Your solution here
  return null;
}
```

Start with the first category and progress systematically through each folder to build a strong DSA foundation! 