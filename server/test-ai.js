const { analyzeWithAI } = require('./ai.js');

async function run() {
  try {
    const result = await analyzeWithAI({ title: 'Test Product', content: 'Price: $100' });
    console.log(result);
  } catch (error) {
    console.error("CAUGHT ERROR:", error.message);
  }
}
run();
