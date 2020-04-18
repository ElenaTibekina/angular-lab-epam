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
import { EditingFormComponent } from './editing-form/editing-form.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';


@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonCardComponent,
    DamageBorderDirective,
    PokemonTextComponent,
    PersonalPageComponent,
    PokemonSearchComponent,
    EditingFormComponent,
    SuccessAlertComponent],
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
