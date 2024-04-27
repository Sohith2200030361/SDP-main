const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log(err));

// Schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmpassword: String,
});

// Model
const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/signup", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await userModel.findOne({ email }).exec();

        if (existingUser) {
            // If user exists, send a response indicating that the email is already registered
            res.json({ message: "Email id is already registered", alert: false });
        } else {
            // If user doesn't exist, save the new user
            const newUser = new userModel(req.body);
            const savedUser = await newUser.save();
            res.json({ message: "Successfully signed up", user: savedUser, alert: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/login", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    try {
        // Check if the user exists for login
        const result = await userModel.findOne({ email }).exec();

        if (result) {
            const datasend = {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
            };
            console.log(datasend)
            res.json({ message: "Login is successful", alert: true, data:datasend});
        } else {
            res.json({ message: "Email is not available,please signup ", alert: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => console.log("Server is running at port:" + PORT));
