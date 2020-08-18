import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SkillService } from '../skill.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

    displayedColumns: string[] = ['name', 'description', 'actions'];
    dataSource: MatTableDataSource<any>;
    result = [];

    constructor(
        private router: Router,
        private skillService: SkillService,
    ) { }

    ngOnInit() {
        this.getSkillList();  
    }

    editskill(skill) {
        this.router.navigateByUrl('/skill/details/' + skill.id);
    }

    deleteSkill(skill){
        console.log(skill);
        this.skillService.deleteSkill(skill.id).subscribe(res => {
            this.getSkillList();
        },
        err =>{
            console.log(err);
        }
        );
    }

    getSkillList(){
        this.skillService.getSkillList()
        .subscribe(skills => {
            this.dataSource = new MatTableDataSource<any>(skills);
        });
    }
}
