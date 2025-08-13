const express = require('express');
const router = express.Router();
const axios = require('axios')

router.post('/', async (req, res) => {
    const {prompt} = req.body;

    try {
      const response =  await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

     const content = response.data.choices[0].message.content;
     res.json({generatedEmail: content});
    } catch (error) {
  console.error("Groq Api Error:", error.response?.data || error.message);
  res.status(500).json({ error: 'Failed to generate Email' });
}

});

module.exports = router;