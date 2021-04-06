import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemons = [
    {
      name: 'bulbasaur',
      id: 1,
      damage: 5,
    },
    {
      name: 'ivysaur',
      id: 2,
      damage: 60,
    },
    {
      name: 'venusaur',
      id: 3,
      damage: 9,
    },
    {
      name: 'charmander',
      id: 4,
      damage: 6,
    },
    {
      name: 'charmeleon',
      id: 5,
      damage: 8,
    },
    {
      name: 'charizard',
      id: 6,
      damage: 10,
    },
    {
      name: 'squirtle',
      id: 7,
      damage: 4,
    },
    {
      name: 'wartortle',
      id: 8,
      damage: 7,
    },
    {
      name: 'blastoise',
      id: 9,
      damage: 51,
    },
  ];

  showWithPictures = true;

  constructor() { }

  ngOnInit(): void {
  }

  switchShowMode(): void {
    this.showWithPictures = !this.showWithPictures;
  }

}
