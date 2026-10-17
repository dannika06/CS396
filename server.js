const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});