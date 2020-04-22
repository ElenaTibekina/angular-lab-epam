import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../pokemon';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../pokemon.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cancel-alert',
  templateUrl: './cancel-alert.component.html',
  styleUrls: ['./cancel-alert.component.scss']
})
export class CancelAlertComponent implements OnInit {

  pokemon: Pokemon;
  @Input() showMePartially: true;

  saved = false;
  save() {
    this.saved = true;
  }

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



  // confirm(id: number) {
  //   this.router.navigate([`pokemon/${id}`]);
  // }

}
