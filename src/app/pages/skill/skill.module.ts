import { NgModule } from '@angular/core';
import { SkillService } from './skill.service';
import { SkillAddComponent } from './skill-add/skill-add.component';
import { SharedModule } from 'src/app/common/modules/shared.module';
import { RouterModule } from '@angular/router';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes = [
    {
        path: 'skill/add',
        component: SkillAddComponent
    },
    {
        path: 'skill/details/:id',
        component: SkillDetailsComponent
    },
    {
        path: 'skill/list',
        component: SkillListComponent
    }
];

@NgModule({
    declarations: [
        SkillAddComponent,
        SkillDetailsComponent,
        SkillListComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        SkillService
    ]
})

export class SkillModule {

}
