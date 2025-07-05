#!/usr/bin/env ts-node

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

// Get the question folder path from command line arguments
const questionFolder = process.argv[2];

if (!questionFolder) {
  console.log('❌ Please provide a question folder path');
  console.log('Usage: npx ts-node run-question.ts <question-folder-path>');
  console.log('Example: npx ts-node run-question.ts 01-arrays-strings/two-sum');
  console.log('Or use: npm run runTest <question-folder-path>');
  process.exit(1);
}

// Check if folder exists
const folderPath = join(__dirname, questionFolder);
const testFilePath = join(folderPath, 'test.ts');

if (!existsSync(folderPath)) {
  console.log(`❌ Question folder not found: ${folderPath}`);
  process.exit(1);
}

if (!existsSync(testFilePath)) {
  console.log(`❌ Test file not found: ${testFilePath}`);
  process.exit(1);
}

try {
  console.log(`🚀 Running question: ${questionFolder}`);
  console.log('=' .repeat(60));
  
  // Execute the test file
  execSync(`npx ts-node ${testFilePath}`, { 
    stdio: 'inherit',
    cwd: __dirname 
  });
  
} catch (error) {
  console.error('❌ Error running question:', error);
  process.exit(1);
} 