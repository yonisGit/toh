import { Component, OnInit } from '@angular/core';
import {Hero} from '../entities/hero';
import {HEROES} from '../entities/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  hero: Hero = {
  id: 1,
  name: 'Thor'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
