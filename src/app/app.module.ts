import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { CrisisComponent } from './modules/crisis/crisis.component';
import { HeroComponent } from './modules/hero/hero.component';

import { AppRoutingModule } from './app.routes';
import { CrisisModule } from './modules/crisis/crisis.module';
import { HeroModule } from './modules/hero/hero.module';

import { CrisisService } from './services/crisis.service';
import { HeroService } from './services/hero.service';

// Imports for loading & configuring the in-memory web api
//import { InMemoryBackendService } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CrisisComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CrisisModule,
    HeroModule
  ],
  providers: [CrisisService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
