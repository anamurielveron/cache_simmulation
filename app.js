const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static('public'));

// Use body-parser to parse POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Define cache and memory parameters
let cacheBlocks = 16;
let cacheLineSize = 32;
let memoryBlocks = 0;

// Functions to simulate cache behavior (replace with actual simulation logic)
function simulateCache(inputSequence) {
  //TODO: Implement cache simulation logic
  return {
    memoryAccessCount: 0,
    cacheHitCount: 0,
    cacheMissCount: 0,
    cacheHitRate: 0,
    cacheMissRate: 0,
    averageMemoryAccessTime: 0,
    totalMemoryAccessTime: 0,
  };
}

app.post('/simulate', (req, res) => {
  memoryBlocks = parseInt(req.body.memoryBlocks);
  const inputSequence = req.body.inputSequence.split(',');
  const simulationResult = simulateCache(inputSequence);
  res.json(simulationResult);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});