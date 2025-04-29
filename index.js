const express = require('express');
const app = express();

app.use(express.json());

// Addition
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

// Subtraction
app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});

// Multiplication
app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});

// Division
app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero' });
  }
  res.json({ result: a / b });
});

// Factorial
app.post('/factorial', (req, res) => {
  const { n } = req.body;
  if (n < 0 || !Number.isInteger(n)) {
    return res.status(400).json({ error: 'n must be a non-negative integer' });
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  res.json({ result });
});

// Factorial2
app.post('/factorial2', (req, res) => {
  const { n } = req.body;
  if (n < 0 || !Number.isInteger(n)) {
    return res.status(400).json({ error: 'n must be a non-negative integer' });
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Math app listening on port ${PORT}`);
}); 