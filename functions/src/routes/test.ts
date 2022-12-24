import { Router } from 'express';
const router = Router();
import { authenticateUser } from '../middleware/authenticateUser';

router.get('/', async (req, res) => {
  try {
    res.send('This is the test route');
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/auth', authenticateUser, async (req, res) => {
  try {
    res.json({ test: req.body.requestingUser });
    // res.send('This is the test route');
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
