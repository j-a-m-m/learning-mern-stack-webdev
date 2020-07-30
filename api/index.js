import express from 'express';

import data from '../src/testData.json';

const router = express.Router();

const contestsObj = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({ contests: contestsObj });
});

export default router;
