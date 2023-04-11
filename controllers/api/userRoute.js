const router = require('express').Router();
const { User } = require('../../models');




router.get('/', async (req, res) => {
    try {
        const allUser = await User.findAll({
            attributes: {exclude: ['password']}
        })
        res.status(200).json(allUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});


router.get('/:id', async (req, res) => {
    try {
        const singleUser = await User.findOne({
            where: {
                id: req.params.id
            },
            attributes: {exclude: ['password']}
        })
        if(!singleUser) {
            res.status(404).json({ message: 'There is no User with this ID'})
        } else {
            res.status(200).json(singleUser)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});



router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const createUser = await User.create({
      ...req.body,
    })
    res.status(200).json(createUser)
  } catch (err) {
    console.log(err)
    res.status(400).json({})
  }
});


router.post('/login', async (req, res) => {
    try {
      console.log(req.body)
      const userData = await User.findOne({ where: { email: req.body.userEmail } });
  
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.userPassword);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  router.post('/logout', async (req, res) => {
    try {
        if(req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            })
        } else {
            res.status(404).end()
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
  });



module.exports = router;