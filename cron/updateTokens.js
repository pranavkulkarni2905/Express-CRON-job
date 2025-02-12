const cron = require('node-cron');
const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

const updateAuthTokens = async () => {
    console.log("Running cron job: Updating authentication tokens...");

    try {
        const users = await User.find(); // Fetch all users

        for (let user of users) {
            const oldToken = user.authToken;
            const newToken = uuidv4(); // Generate a new token

            user.authToken = newToken;
            await user.save();

            console.log(`User: ${user.email} | Old Token: ${oldToken} | New Token: ${newToken}`);
        }

        console.log("Token update completed.");
    } catch (err) {
        console.error("Error updating tokens:", err);
    }
};

// Schedule the job to run every hour
cron.schedule('0 * * * *', updateAuthTokens, {
    scheduled: true,
    timezone: "Asia/Kolkata"
});

module.exports = updateAuthTokens;
