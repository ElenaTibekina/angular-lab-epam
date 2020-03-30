import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Card } from '../pokemons-list/pokemons-list.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() card: Card;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged = new EventEmitter<Card>();

  catchPokemon() {
    this.onChanged.emit(this.card);
  }
}
