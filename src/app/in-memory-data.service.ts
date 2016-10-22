import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, name: 'Mr. Nice'},
      {id: 2, name: 'Narco'},
      {id: 3, name: 'Bombasto'},
      {id: 4, name: 'Celeritas'},
      {id: 5, name: 'Magneta'},
      {id: 6, name: 'RubberMan'},
      {id: 7, name: 'Dynama'},
      {id: 8, name: 'Dr IQ'},
      {id: 9, name: 'Magma'},
      {id: 10, name: 'Tornado'}
    ];
    let crisises = [
      {id: 1, name: 'Water Turned to Blood'},
      {id: 2, name: 'Frogs'},
      {id: 3, name: 'Biting Insects'},
      {id: 4, name: 'Biting Wild Animals'},
      {id: 5, name: 'Livestock Disease'},
      {id: 6, name: 'Boils'},
      {id: 7, name: 'Fiery Hail'},
      {id: 8, name: 'Locusts'},
      {id: 9, name: 'Darkness'},
      {id: 10, name: 'Death of Firstborn'}
    ];
    return {heroes, crisises};
  }
}