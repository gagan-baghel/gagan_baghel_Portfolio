const fs = require('node:fs');
const path = require('node:path');

const nextDir = path.join(process.cwd(), '.next');

try {
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
  }
} catch (error) {
  console.error('Failed to clean .next directory:', error);
  process.exit(1);
}
