const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // e.g., Pending, In Progress, Resolved
  assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  history: [{
    message: String,
    date: Date,
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);
