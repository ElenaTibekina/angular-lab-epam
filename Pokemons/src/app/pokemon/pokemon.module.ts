import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { DamageBorderDirective } from './directives/damage-border.directive';
import { PokemonTextComponent } from './pokemon-text/pokemon-text.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonCardComponent,
    DamageBorderDirective,
    PokemonTextComponent,
    PersonalPageComponent,
    PokemonSearchComponent],
  exports: [
    PokemonsListComponent,
    PersonalPageComponent,
    PokemonSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PokemonModule { }
