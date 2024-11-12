const express = require('express');
const auth = require('../middleware/authMiddleware');
const { createComplaint, getComplaints } = require('../controllers/complaintController');

const router = express.Router();

router.post('/', auth, createComplaint);
router.get('/', auth, getComplaints);

module.exports = router;
