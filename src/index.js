require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import Routes
const restakersRoutes = require('./routes/restakers');
const validatorsRoutes = require('./routes/validators');
const rewardsRoutes = require('./routes/rewards');
const connectDB = require('./config/db');
const syncAllRoute = require('./routes/sync');

app.use('/restakers', restakersRoutes);
app.use('/validators', validatorsRoutes);
app.use('/rewards', rewardsRoutes);
app.use('/sync-all', syncAllRoute);

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});



connectDB();
// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err.message);
  process.exit(1);
});