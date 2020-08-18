import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SkillService } from '../skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  skillForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public skillService: SkillService
  ) { }

  ngOnInit() {
    this.skillForm = this.fb.group({
      name: [''],
      description: ['']
  })
  }

  get f() { return this.skillForm.controls; }

  edit() {
    console.log(this.skillForm.value)

    if (this.skillForm.invalid) {
        return;
    }

    this.skillService.updateSkill(this.skillForm.value).subscribe(res => {
        this.router.navigateByUrl('/skill/list');
    });
}


}
