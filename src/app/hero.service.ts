import { Injectable } from '@angular/core';
import {Hero} from './entities/hero';
import {HEROES} from './entities/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}
