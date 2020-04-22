import { Component, OnInit, Input } from '@angular/core';
import {Pokemon} from '../pokemon';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  pokemon: Pokemon;
  @Input() showMePartially: true;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemonById(+params.get('pokemonId'));
    });
  }

  confirm(id: number) {
    this.router.navigate([`pokemon/${id}`]);
  }

}
