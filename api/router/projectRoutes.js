const express = require('express');
const app = express();
const projectRoutes = express.Router();
const Project = require('../models/Project');


projectRoutes.route('/add').post(function(req, res){
  let project = new Project(req.body);
  project.save()
  .then(project =>{
    res.status(200).json({'Project':'Project Added Successfully'})
  })
  .catch(err =>{
    err.status(400).send("unable to save to project in DB");
  })
})

projectRoutes.route('/').get(function(req, res){
  Project.find(function(err, projects){
      if(err){
        console.log(err);
      }
      else{
        res.json(projects)
      }
    })
  })

projectRoutes.route('/edit/:id').get(function(req, res){
  Project.findById(req.params.id, function(err, projects){
      if(err){
        console.log(err);
      }
      else{
        res.json(projects)
      }
    })
  })

// projectRoutes.route('/update/:id').post(function(req, res){
//   Project.findById(req.params.id, function(err, project){
//       if(!project){
//        res.status(404).send("Record not found")
//       }
//       else{
//         project.projectNane = req.body.projectName;
//         project.story = req.body.story;
//         project.duration = req.body.duration;
//         project.startTime = req.body.startTime;
//         project.endTime = req.body.endTime;
//         project.status = req.body.status;

//         project.save().then(project => {
//           res.json('updated product')
//         })
//         .catch(err=>{
//           res.status(400).send("unable to update Project from db");

//         })
//       }
//     })
//   })

projectRoutes.route('/update/:id').post(function (req, res) {
  Project.findById(req.params.id, function(err, project) {
    if (!project)
    return next(new Error('Could not load Document'));
    else {
        project.projectName = req.body.projectName;
        project.story = req.body.story;
        project.duration = req.body.duration;
        project.startTime = req.body.startTime;
        project.endTime = req.body.endTime;
        project.status = req.body.status;

      project.save().then(project => {
          res.json('Update project complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


projectRoutes.route('/delete/:id').get(function (req, res){
  Project.findByIdAndRemove({_id: req.params.id}, function(err, project){
    if(err) res.json(err)
    else res.json('project deleted successfully')
  })
})




module.exports = projectRoutes;
