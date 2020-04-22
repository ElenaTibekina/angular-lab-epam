import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {EditingFormComponent} from './editing-form/editing-form.component';
import { PokemonService } from './pokemon.service';
import { Subject } from 'rxjs';
import { CancelAlertComponent } from './cancel-alert/cancel-alert.component';

@Injectable({
  providedIn: 'root'
})
export class CancelGuard implements CanDeactivate<EditingFormComponent> {
  constructor(
    private pokemonService: PokemonService) { }

  canDeactivate(
    component: EditingFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (JSON.stringify(component.pokemon) === JSON.stringify(this.pokemonService.getPokemonById(component.pokemon.id))) {
      return true;
    } else {
      return confirm('Are you sure, you want to leave this page? Your changes won\'t be saved');
    }
  }
}
