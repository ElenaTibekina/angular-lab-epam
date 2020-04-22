import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsListComponent } from './pokemon/pokemons-list/pokemons-list.component';
import { PersonalPageComponent } from './pokemon/personal-page/personal-page.component';
import {EditingFormComponent} from './pokemon/editing-form/editing-form.component';
import {CancelGuard} from './pokemon/cancel.guard';


const routes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: 'pokemons_list', component: PokemonsListComponent },
  { path: 'pokemons_list/:pokemonId/edit', component: PokemonsListComponent},
  { path: 'pokemon/:pokemonId', component: PersonalPageComponent },
  { path: 'pokemon/:pokemonId/edit', component: EditingFormComponent, canDeactivate: [CancelGuard] },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
