const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

// Create a router for math operations
const mathRouter = express.Router();

// Addition
mathRouter.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

// Subtraction
mathRouter.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});

// Multiplication
mathRouter.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});

// Division
mathRouter.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero' });
  }
  res.json({ result: a / b });
});

// Factorial
mathRouter.post('/factorial', (req, res) => {
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

// Mount the math router
app.use('/math', mathRouter);

// UUID Endpoint
app.get('/uuid', (req, res) => {
  const uuid = uuidv4(); // Genera un UUID
  res.json({ uuid });
});

// Hello Endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, audience!' });
});

// Time Endpoint
app.get('/time', (req, res) => {
  res.json({ currentTime: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Math app listening on port ${PORT}`);
});
