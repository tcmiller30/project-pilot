const router = require('express').Router();
const { User, Project } = require('../models');
const withAuth = require('../utils/auth');

//Login Page that will contain the sign in/up form
router.get('/', withAuth, async (req, res) => {
try {
    // Getting the card that shows the project and grabs users name and due date.
    const projectCards = await Project.findAll(   {
        attributes: ['title', 'description', 'clientName', 'project_created', 'id'],
    });
    // Create a new array for all the projects need to add
    const allProjects = projectCards.map((project) => project.get({ plain: true }));
    console.log(allProjects[0]);
    res.render('dashboard', {
        allProjects,
    // Need authrotized js to know if theyre logged in
      user_id: req.session.user_id
    })
    // res.status(200).json(projectCards)
} catch (error) {
    console.log(error)
    res.status(500).json(error);
}
});

// Getting a single card by their id
router.get('/project/:id', withAuth, async (req, res) => {
 try {
    const singleProject = await Project.findOne({
        where: { id: req.params.id},
        attributes: ['id', 'title', 'description', 'project_created', 'clientName', 'project_due', 'hours', 'rate'],
    });

    const project = singleProject.get({ plain: true });

    res.render('project', {
        ...project,
       // Need authrotized js to know if theyre logged in
      user_id: req.session.user_id
    });
 } catch (error) {
    res.status(500).json(error)
 }
});

router.get('/login', async (req, res) => {
    try {
        if(req.session.loggedIn) {
            res.redirect('/dashboard');
            return
        } else {
            res.render('login')
        }
    } catch (err) {
        console.log(err);
    }
});




module.exports = router;






