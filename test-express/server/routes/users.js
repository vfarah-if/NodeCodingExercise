import { Router } from 'express';
const router = Router();
const userResponse =
  [
    {
      user: {
        name: 'Jane',
        lastname: 'Doe'
      }
    },
    {
      user: {
        name: 'Jon',
        lastname: 'Doe'
      }
    },
    {
      user: {
        name: 'Michael',
        lastname: 'Caine'
      }
    },
    {
      user: {
        name: 'James',
        lastname: 'Bond'
      }
    },
    {
      user: {
        name: 'Robert',
        lastname: 'Plant'
      }
    },
    {
      user: {
        name: 'Jordan',
        lastname: 'Peterson'
      }
    },
  ];


router.get('/', function (req, res, next) {
  // console.debug(req, next);
  res.json(userResponse);
});

export default router;
