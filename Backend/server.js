const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoutes = require("./routes/emailRoutes.js")
const generateRoutes = require("./routes/generateRoutes.js");
const router = require('./routes/generateRoutes.js');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// app.use()
app.use('/send-email', emailRoutes);
app.use('/generate-email', generateRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// GROQ_API_KEY=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
// EMAIL=belalraza158@gmail.com
// EMAIL_PASS=ktnv vvnd mhno lvck
// PORT=5000