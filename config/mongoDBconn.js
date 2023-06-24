const DB_URL = "mongodb+srv://admin:admin123@cluster0.idfjakr.mongodb.net/?retryWrites=true&w=majority"

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, {
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