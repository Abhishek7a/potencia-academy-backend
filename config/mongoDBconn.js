require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
    catch (err) {
        console.log('Error connecting to MongoDB');
        console.error(err);
    }
}

module.exports = connectDB;