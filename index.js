const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

app.use(express.json());

// Addition
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

// Endpoint para obtener un UUID
app.get('/uuid', (req, res) => {
  const uuid = uuidv4();
  res.json({ uuid });
});

// Endpoint para subir una imagen de un gato
app.post('/upload-cat', upload.single('catImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se subió ninguna imagen' });
  }
  res.json({
    message: 'Imagen subida con éxito',
    filePath: path.join('uploads', req.file.filename)
  });
});

// UUID Endpoint
app.get('/uuid', (req, res) => {
  const uuid = uuidv4(); // Genera un UUID
  res.json({ uuid });
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Math app listening on port ${PORT}`);
});
