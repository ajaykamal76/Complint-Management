const Complaint = require('../models/Complaint');

exports.createComplaint = async (req, res) => {
  try {
    const { title, description, address } = req.body;
    const complaint = await Complaint.create({ user: req.user._id, title, description, address });
    res.status(201).json(complaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user._id });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
