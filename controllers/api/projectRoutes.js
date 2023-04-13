const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create new project
// TODO add authentication check
router.post('/', async (req, res) => {
    try {
      console.log(req.body);
      const newProject = await Project.create({
        ...req.body
      });
      console.log(newProject);
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
        // Getting project data.
        const projectChartData = await Project.findAll(   {
    
            attributes: ['title','hours','rate'],
        });
        // Create a new array for all the projects need to add
        const allProjectData = projectChartData.map((project) => project.get({ plain: true }));
        console.log(allProjectData);
        res.set('Content-Type', 'application/json');
        res.status(200).json(allProjectData);
        } catch (error) {
        console.log(error)
        res.status(500).json(error);
  }
    
    });
    
  module.exports = router;