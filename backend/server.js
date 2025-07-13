const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const app = express();
  app.use(cors({
    origin: 'https://portfolio-tawny-nu-14.vercel.app',
    credentials: true
  }));
app.use(express.json());

const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

// Placeholder route
app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 