require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import Routes
const restakersRoutes = require('./routes/restakers');
const validatorsRoutes = require('./routes/validators');
const rewardsRoutes = require('./routes/rewards');

app.use('/restakers', restakersRoutes);
app.use('/validators', validatorsRoutes);
app.use('/rewards', rewardsRoutes);

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
