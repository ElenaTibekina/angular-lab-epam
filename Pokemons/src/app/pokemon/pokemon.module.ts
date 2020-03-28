import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { DamageBorderDirective } from './directives/damage-border.directive';
import { PokemonTextComponent } from './pokemon-text/pokemon-text.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PokemonsListComponent,
    PokemonCardComponent,
    DamageBorderDirective,
    PokemonTextComponent,
    HeaderComponent],
  exports: [
    HeaderComponent,
    PokemonsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
