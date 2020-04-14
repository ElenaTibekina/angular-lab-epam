import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemonById(+params.get('pokemonId'));
    });
  }

  catchPokemon(): void {
    this.pokemon.caught = !this.pokemon.caught;
    this.pokemon.caught ?
      console.log('Pokemon ' + this.pokemon.name + ' is caught')
      :
      console.log('Pokemon ' + this.pokemon.name + ' is free');
  }
}
