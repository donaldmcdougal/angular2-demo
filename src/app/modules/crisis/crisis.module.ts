import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';

const routes: Routes = [
    { path: 'crisis/:id', component: CrisisDetailComponent }
];

@NgModule({
    declarations: [
        CrisisDetailComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: [CrisisDetailComponent]
})
export class CrisisModule { }
