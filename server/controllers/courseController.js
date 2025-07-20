const courses = require('../data/courses.json');

exports.getCourse = (req, res) => {
  const course = courses.find(c => c.course === req.params.course);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json(course.chapters);
};