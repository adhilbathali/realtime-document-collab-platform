const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.post('/api/auth/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email already registered.' });
    }

    const newUser = {
        id: uuidv4(),
        username,
        email,
        password
    };
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully!' });
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
    }
    const token = uuidv4() //Generate a basic token
    res.status(200).json({ message: 'Login successful', username: user.username, token: token });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});