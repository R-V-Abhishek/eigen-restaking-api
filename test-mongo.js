require('dotenv').config();
const mongoose = require('mongoose');

async function test() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ SUCCESS: Connected to MongoDB");
  } catch (err) {
    console.error("❌ ERROR:", err.message);
  } finally {
    process.exit();
  }
}

test();
