const express = require('express');
const Project = require('../models/Project');

exports.addProject = function(req, res){
  let project = new Project(req.body);
  project.save()
  .then(project =>{
    res.status(200).json({'Project':'Project Added Successfully'})
  })
  .catch(err =>{
    err.status(400).send("unable to save to project in DB");
  })

}

exports.allProject = function(req, res){
  Project.find(function(err, projects){
    if(err){
      console.log(erro)
    }
    else (
      res.json(projects)
    )
  })

}

exports.editProject = function(req, res){
  Project.findById(req.params.id, function(err, project){
      if(err){
        console.log(err);
      }
      else{
        res.json(project)
      }
    })
  }
  exports.updateProject =  function (req, res) {
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
  }

 exports.deleteProject = function(req, res){
   Project.findByIdAndRemove({_id: req.params.id}, function(err, project){
   if(err) res.json(err)
   else res.json('Project deleted success')

   })
 }
