import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  uri = 'http://localhost:4001/projects';

  constructor( private http: HttpClient) { }
  addProject(projectName, story, duration, startTime, endTime, status){
    const obj = {
      projectName,
      story,
      duration,
      startTime,
      endTime,
      status
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('project add success'))
  }

  getProjects(){
    return this.http.get(`${this.uri}`);

  }
  editProject(id){
    return this.http.get(`${this.uri}/edit/${id}`);

  }

  updateProject(projectName, story, duration, startTime, endTime, status, id){
    const obj = {
      projectName,
      story,
      duration,
      startTime,
      endTime,
      status
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
    .subscribe(res=> console.log(' project updated'))

  }

  deleteProject(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
