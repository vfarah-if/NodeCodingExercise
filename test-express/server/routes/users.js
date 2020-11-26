import { Router } from 'express';
const router = Router();
import { getUserList } from '../users'

router.get('/', function (req, res, next) {
  // console.debug(req, next);
  const usersResponse = getUserList();
  res.json(usersResponse);
});

export default router;
