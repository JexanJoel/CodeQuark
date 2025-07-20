const User = require('../models/User');

exports.updateProgress = async (req, res) => {
  const { course, chapter, quizScore } = req.body;
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const progress = user.progress[course] || Array(10).fill().map((_, i) => ({ chapter: i + 1, completed: false, quizScore: 0 }));
    progress[chapter - 1] = { chapter, completed: true, quizScore };

    user.progress[course] = progress;
    user.streak = user.lastActivity.toDateString() === new Date().toDateString() ? user.streak + 1 : 1;
    user.lastActivity = new Date();
    await user.save();

    res.json({ message: 'Progress updated' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};