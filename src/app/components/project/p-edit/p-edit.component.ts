import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, Form } from '@angular/forms';
import { ProjectService} from '../../../service/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-p-edit',
  templateUrl: './p-edit.component.html',
  styleUrls: ['./p-edit.component.css']
})
export class PEditComponent implements OnInit {
  angForm : FormGroup;
  project : any = {};
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private pjs: ProjectService) {
                this.createForm()
              }

    createForm(){
        this.angForm = this.fb.group({
                projectName: ['', Validators.required ],
                story: ['', Validators.required ],
                duration: ['', Validators.required ],
                startTime: ['', Validators.required ],
                endTime: ['', Validators.required ],
                status: ['', Validators.required ],
              })
        }
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.pjs.editProject(params['id']).subscribe(res => {
        this.project = res;
    })
  })
  }

  updateProject( projectName, story, duration, startTime, endTime, status){
    this.route.params.subscribe(params =>{
      this.pjs.updateProject(projectName, story, duration, startTime, endTime, status, params['id']);
    this.router.navigate(['projects']);

    })

      }


}
