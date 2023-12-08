const UserModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const signup = async (req, res) => {
    try {
        const payload = req.body;

        // Check if the user with the given email already exists
        const existingUser = await UserModel.findOne({ email: payload.email });

        if (existingUser) {
            return res.status(409).json({ result: "User already registered" });
        } else {
            // Hash the password
            const passwordHash = await bcrypt.hash(payload.password, 8);
            payload.password = passwordHash;

            // Create a new user document
            const newUser = new UserModel(payload);
            await newUser.save();

            return res.status(201).json({ result: "Registration successful", userName: payload.userName });
        }
    } catch (error) {
        // Handle specific errors and provide appropriate messages
        return res.status(500).json({ error: error.message });
    }
};



const signin = async (req, res) => {
    try {
        const payload = req.body;
        let data = await UserModel.findOne({ email: payload.email });

        if (!data) {
            return res.status(401).send({ result: "User not found. Please sign up first." });
        }

        const correctPassword = await bcrypt.compare(payload.password, data.password);

        if (!correctPassword) {
            return res.status(402).send({ result: "Incorrect password. Please try again." });
        }

        const token = jwt.sign({ email: data.email, userId: data._id }, "avinashkalmegh123");
        const decoded = verifyToken(token);

        if (decoded) {
            return res.status(200).json({ result: "Signin successful", token, userData: decoded });
        } else {
            return res.status(500).send({ result: "Token verification failed" });
        }
    } catch (error) {
        return res.status(500).send({ result: error.message });
    }
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, "avinashkalmegh123");
        return decoded;
    } catch (err) {
        return null; // Token is invalid
    }
};



module.exports = { signin, signup };