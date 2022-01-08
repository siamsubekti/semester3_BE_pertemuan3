const express = require('express');
const router = express.Router({ mergeParams: true });
const studentService = require('../services/StudentService');

router.post("/student", studentService.create);
router.get("/student", studentService.get);

module.exports = router;