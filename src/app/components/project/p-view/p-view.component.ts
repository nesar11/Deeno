import { Component, OnInit } from '@angular/core';
import Project from '../../../models/Project';
import {ProjectService} from '../../../service/project.service';

@Component({
  selector: 'app-p-view',
  templateUrl: './p-view.component.html',
  styleUrls: ['./p-view.component.css']
})
export class PViewComponent implements OnInit {
projects : Project[];
  constructor(private pjs: ProjectService) { }

  ngOnInit(): void {
    this.pjs.getProjects().subscribe((data: Project[])=>{
      this.projects = data;
      console.log(data);
    })
  }
deleteProject(id){
  this.pjs.deleteProject(id).subscribe(res =>{
    console.log('Project Deleted')
  })
}
}
