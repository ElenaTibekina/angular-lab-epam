import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged = new EventEmitter<Pokemon>();

  catchPokemon() {
    this.onChanged.emit(this.pokemon);
  }
}
