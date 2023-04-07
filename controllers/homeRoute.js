const router = require('express').Router();
const { User, Project } = require('../models');

//Login Page that will contain the sign in/up form
router.get('/', async (req, res) => {
try {
    // Getting the card that shows the project and grabs users name and due date.
    const projectCards = await Project.findAll({
        attributes:  [title, description, hours ],
        include: [
            {
                model: User,
                attributes: [name, email],
            },
        ],
    }),
    // Create a new array for all the projects need to add
    const allProjects = projectCards.map((project) => project.get({ plain: true }));
    res.render('home', {
        // Need authrotized js to know if theyre logged in
        : req.session.//logged in variable from ^
    })
} catch (error) {
    res.status(500).json(error);
}
});

// Getting a single card by their id
router.get('/project/:id', async (req, res) => {
 try {
    const singleProject = await Project.findByPk(req.params.id, {
        attributes: [//title, due date, creation date, hours spent, income?],
        include: [
            {
                model: User,
                attributes: [//name]
            }
        ]
    }),

    const project = singleProject.get({ plain: true });

    res,render('project', {
        ...project,
       // Need authrotized js to know if theyre logged in
       : req.session.//logged in variable from ^
    });
 } catch (error) {
    res.status(500).json(error)
 }
});





