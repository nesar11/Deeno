import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, Form } from '@angular/forms';
import { ProjectService} from '../../../service/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.css']
})
export class PAddComponent implements OnInit {
  angForm : FormGroup;
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
  }
  addProject( projectName, story, duration, startTime, endTime, status){
this.pjs.addProject(projectName, story, duration, startTime, endTime, status);
this.router.navigate(['projects']);
  }

}
