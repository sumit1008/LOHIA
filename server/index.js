// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB")).catch(error => console.error("MongoDB connection error:", error));

app.get('/', (req, res) => {
    res.send("Hello from Express");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
