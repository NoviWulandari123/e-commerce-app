require('dotenv').config();
const express = require('express');
const app = express();

// Import routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json()); // Middleware untuk parsing JSON body

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Rute dasar
app.get('/', (req, res) => {
   res.send('Welcome to the E-commerce API!');
});

// Jalankan server
//ssss
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
   console.log(`Access API at http://localhost:${PORT}/api`);
});
