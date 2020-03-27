import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComponent} from './pokemon-card/card.component';
import { HeaderComponent } from './header/header.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TextPokemonsListComponent } from './text-pokemons-list/text-pokemons-list.component';

const appRoutes: Routes = [
  { path: 'main', component: PokemonsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    PokemonsComponent,
    TextPokemonsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
