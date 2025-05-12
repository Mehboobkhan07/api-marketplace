const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ msg: "Email already exists" });

        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hash, role });
        res.status(201).json({ msg: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ msg: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ token, user: { name: user.name, role: user.role } });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};
