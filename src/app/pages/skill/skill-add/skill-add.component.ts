import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from '../skill.service';

@Component({
    selector: 'app-skill-add',
    templateUrl: './skill-add.component.html',
    styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent implements OnInit {

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

    add() {
        console.log(this.skillForm.value)

        if (this.skillForm.invalid) {
            return;
        }

        this.skillService.insertSkill(this.skillForm.value).subscribe(res => {
            this.clearForm();
            this.router.navigateByUrl('/skill/list');
        });
    }

    clearForm() {
        this.skillForm.reset();
        Object.keys(this.skillForm.controls).forEach(key => {
            this.skillForm.get(key).setErrors(null);
        });
    }

    onClear() {
        this.skillForm.reset();
    }

}
