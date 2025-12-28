const express = require('express');
const { updateProgress } = require('../controllers/progressController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/progress', authMiddleware, updateProgress);

module.exports = router;
