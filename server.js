const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/User');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

// will start the cron job each hour
require('./cron/updateTokens');

// if you want to test immediatedly - call function manually

/* 

const updateTokens = require('./cron/updateTokens');
updateTokens();

*/

// Route to add a new user (for testing)
app.post('/add-user', async (req, res) => {
    const { name, email } = req.body;
    
    const newUser = new User({ 
        name, 
        email, 
        authToken: require('uuid').v4() 
    });

    await newUser.save();
    res.json({ message: 'User added successfully', user: newUser });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
