const UserModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminModel = require("../Models/admin.model");


const getData = async (req, res) => {
    try {

        const data = await AdminModel.find();

        return res.status(201).json({ result: data });

    } catch (error) {
        // Handle specific errors and provide appropriate messages
        return res.status(500).json({ error: error.message });
    }
}

const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await AdminModel.findOneAndDelete({ _id: id });

        if (!data) {
            return res.status(404).json({ error: "Data not found" });
        }

        return res.status(201).json({ result: data });

    } catch (error) {
        // Handle specific errors and provide appropriate messages
        return res.status(500).json({ error: error.message });
    }
}


const adminSignup = async (req, res) => {
    try {
        const payload = req.body;

        // Check if an admin with the given email already exists
        const existingAdmin = await AdminModel.findOne({ email: payload.email });

        if (existingAdmin) {
            return res.status(409).json({ result: "Admin already registered" });
        } else {
            // Hash the password
            // const passwordHash = await bcrypt.hash(payload.password, 8);
            // payload.password = passwordHash;

            // Create a new admin document
            const newAdmin = new AdminModel(payload);
            await newAdmin.save();

            return res.status(201).json({ result: "Registration successful", userName: payload.userName });
        }
    } catch (error) {
        // Handle specific errors and provide appropriate messages
        return res.status(500).json({ error: error.message });
    }
};






const adminSignin = async (req, res) => {
    try {
        const payload = req.body;
        const admin = await AdminModel.findOne({ email: payload.email });

        if (!admin || payload.password !== admin.password) {
            return res.status(401).json({ result: "Invalid credentials" });
        }

        function formatDate(date) {
            const hours = (`0${date.getUTCHours()}`).slice(-2);
            const minutes = (`0${date.getUTCMinutes()}`).slice(-2);
            const seconds = (`0${date.getUTCSeconds()}`).slice(-2);

            const day = (`0${date.getUTCDate()}`).slice(-2);
            const monthNames = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
            const month = monthNames[date.getUTCMonth()];
            const year = date.getUTCFullYear();

            return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
        }

        // Example usage with new Date()
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        // console.log(formattedDate);


        const token = {
            email: admin.email,
            userId: admin._id,
            type: admin.type,
            username: admin.username,
            role: admin.role,
            time: formattedDate
        };

        return res.status(200).json({ result: "Signin successful", token, userData: token });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};






module.exports = { adminSignin, adminSignup, getData, deleteData };