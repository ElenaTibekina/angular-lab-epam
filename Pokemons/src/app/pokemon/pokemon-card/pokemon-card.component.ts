import { Component, Input } from '@angular/core';
import { Card } from '../pokemons-list/pokemons-list.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() card: Card;
  caught: boolean;

  catchPokemon() {
    this.caught = !this.caught;
    if (this.caught) {
      console.log('Pokemon ' + this.card.name + ' is caught');
    } else {
      console.log('Pokemon ' + this.card.name + ' is free');
    }
  }
}
