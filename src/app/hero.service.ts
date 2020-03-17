import { Injectable } from '@angular/core';
import {Hero} from './entities/hero';
import {HEROES} from './entities/mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }
}
