import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  pokemons: Pokemon[];

  getAllPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

  filterPokemonsByName(name: string): Pokemon[] {
    return this.pokemons.filter((pokemon: Pokemon) => pokemon.name === name);
  }

  getPokemonById(id: number): Pokemon[] {
    return this.pokemons.filter((pokemon: Pokemon) => pokemon.id === id);
  }
}
