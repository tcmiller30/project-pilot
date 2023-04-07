const router = require('express').Router();
const { User, Project } = require('../models');
const withAuth = require('../utils/auth');

//Login Page that will contain the sign in/up form
router.get('/', async (req, res) => {
try {
    // Getting the card that shows the project and grabs users name and due date.
    const projectCards = await Project.findAll({
        attributes: [title, description, project_created, clientName],

    });
    // Create a new array for all the projects need to add
    const allProjects = projectCards.map((project) => project.get({ plain: true }));
    res.render('home', {
        allProjects,
    // Need authrotized js to know if theyre logged in
    //   user_id : req.session.user_id
    })
} catch (error) {
    res.status(500).json(error);
}
});

// Getting a single card by their id
router.get('/project/:id', async (req, res) => {
 try {
    const singleProject = await Project.findByPk(req.params.id, {
        attributes: [title, description, project_created, clientName, project_due, hours, rate],
    });

    const project = singleProject.get({ plain: true });

    res.render('project', {
        ...project,
       // Need authrotized js to know if theyre logged in
    //   user_id: req.session.user_id
    });
 } catch (error) {
    res.status(500).json(error)
 }
});

module.exports = router;






