const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require("./routes/auth")
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');





const connectDB = require("./config/database")

const PORT = process.env.PORT || 3000;  // Use the port assigned by Render or default to 3000


// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()

// 
app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use('/api/orders', orderRoutes);
app.use('api/carts', cartRoutes)


// Root route
app.get('/', (req, res) => {
  res.send('Server started running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});