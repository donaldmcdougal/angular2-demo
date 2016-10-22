import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Crisis } from '../../dtos/crisis';

import { CrisisService } from '../../services/crisis.service';

@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.css']
})
export class CrisisComponent implements OnInit {

  crisises: Crisis[];
  selectedCrisis: Crisis;
  error: any;

  constructor(private crisisService: CrisisService,
              private router: Router) { }

  ngOnInit() {
    this.getCrisises();
  }

  onSelect(crisis: Crisis) {
    this.router.navigate(['/crisis', crisis.id]);
  }

  getCrisises() {
    this.crisisService.getCrisises().then(crisises => this.crisises = crisises);
  }

  addCrisis() {
    this.router.navigate(['/crisis', 'new']);
  }

  delete(crisis: Crisis, event: any):void {
    event.stopPropagation();
    this.crisisService
        .delete(crisis)
        .then(res => {
          this.crisises = this.crisises.filter(c => c !== crisis);
          if (this.selectedCrisis === crisis) { this.selectedCrisis = null; }
        })
        .catch(error => this.error = error); //TODO: Display error message;
  }

}
