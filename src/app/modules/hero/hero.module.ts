import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
    { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
    declarations: [
        HeroDetailComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: [HeroDetailComponent]
})
export class HeroModule { }
