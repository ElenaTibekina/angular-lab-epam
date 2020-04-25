import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent  {
  @Output() changed = new EventEmitter<string>();
  name = '';

  searchPokemon(): void {
    this.changed.emit(this.name);
  }
}
