import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCaught = new EventEmitter<Pokemon>();

  constructor(private router: Router) { }

  catchPokemon() {
    this.onCaught.emit(this.pokemon);
  }

  showEditForm(id: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate([`pokemon/${id}/edit`]);
  }
}
