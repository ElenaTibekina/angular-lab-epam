import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsListComponent } from './pokemon/pokemons-list/pokemons-list.component';
import { PersonalPageComponent } from './pokemon/personal-page/personal-page.component';


const routes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: 'pokemons/:pokemonId', component: PersonalPageComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
