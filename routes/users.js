import { Router } from 'express';

const router = new Router();

// const validateLogin = (req, res, next) => {
//   // Validated the login somehow..
//
//   return next();
// };
//
// router.use(validateLogin);
//
// router.get('/', validateLogin, (req, res) => {
//   return res.json([]);
// });


router.route('/')
  .get((req, res) => {
    const db = req.app.get('db');
    console.log(db);
    
    return res.json(db.users);
  })
  .post((req, res) => {
    return res.status(201).json({});
  });

router.route('/:id')
  .get((req, res) => {
    return res.json([]);
  })
  .put((req, res) => {
    console.log(req.params);
    console.log(req.body);
    return res.json({});
  })
  .delete((req, res) => {
    console.log(req.params);
    return res.json({});
  });

export default router;