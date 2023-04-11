const router = require('express').Router();
const { User } = require('../../models');

// router.post('/', async (req,res) => {
//     try {
//         const newUser = await User.create({
            
//         });
//         res.status(200).json(newUser)
//     } catch(err) {
//         res.status(400).json(err)
//     }
// });


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




module.exports = router;