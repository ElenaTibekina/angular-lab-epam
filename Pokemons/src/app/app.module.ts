import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { CoreModule } from './core/core.module';
import { PokemonsListComponent } from './pokemon/pokemons-list/pokemons-list.component';

const appRoutes: Routes = [
  { path: 'main', component: PokemonsListComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
