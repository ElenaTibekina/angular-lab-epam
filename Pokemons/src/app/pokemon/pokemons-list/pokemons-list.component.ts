import {Component, Input} from '@angular/core';

export interface Card {
  id: number;
  name: string;
  damage: number;
}

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent  {
  cards: Card[] = [
    {id: 1, name: 'bulbasaur', damage: 23},
    {id: 2, name: 'ivysaur', damage: 67},
    {id: 3, name: 'venusaur', damage: 51},
    {id: 4, name: 'charmander', damage: 14},
    {id: 5, name: 'charmeleon', damage: 58},
    {id: 6, name: 'charizard', damage: 37},
    {id: 7, name: 'squirtle', damage: 78},
    {id: 8, name: 'wartortle', damage: 128},
    {id: 9, name: 'blastoise', damage: 8},
    {id: 10, name: 'caterpie', damage: 46},
    {id: 11, name: 'metapod', damage: 74},
    {id: 12, name: 'butterfree', damage: 60}
  ];
  textView: boolean;

  toggleView() {
    this.textView = !this.textView;
  }
}
