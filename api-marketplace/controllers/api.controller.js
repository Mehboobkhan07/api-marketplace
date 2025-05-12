const Api = require('../models/Api');

exports.createApi = async (req, res) => {
    try {
        const { name, description, baseUrl, docsLink, category } = req.body;
        const newApi = await Api.create({
            name,
            description,
            baseUrl,
            docsLink,
            category,
            createdBy: req.user._id
        });
        res.status(201).json({ msg: "API created successfully", api: newApi });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};

exports.getAllApis = async (req, res) => {
    try {
        const apis = await Api.find().populate("createdBy", "name email");
        res.json(apis);
    } catch (err) {
        res.status(500).json({ msg: "Error fetching APIs" });
    }
};
