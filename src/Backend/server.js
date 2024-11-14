// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000', // Allow only your React app
    credentials: true,
}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Home Page from express')
})
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can process the message, e.g., save it to a database or send an email
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.status(200).send('Message received!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
