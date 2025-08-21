const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

try {
  const data = fs.readFileSync(inputPath, 'utf-8');
  const lines = data.trim().split('\n');

  let total = 0;
  for (let line of lines) {
    const parts = line.trim().split(' ');
    const number = Number(parts[1]);
    total += number;
  }

  fs.writeFileSync(outputPath, total.toString(), 'utf-8');
  console.log('Sum written to output.txt');
} catch (err) {
  console.error('Error:', err);
}
