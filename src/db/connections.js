const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully Connected To MongoDB");
    } catch (error) {
        console.log(error);
    }
}

connection();