const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create new project
// TODO add authentication check
router.post('/', async (req, res) => {
    try {
      const newProject = await Project.create({
        ...req.body
      });
      console.log(newProject);
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });