import { Component } from '@angular/core';

export interface Card {
  name: string,
  caught: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [
    {name: 'Pokemon 1', caught: false},
    {name: 'Pokemon 2', caught: false},
    {name: 'Pokemon 3', caught: false},
    {name: 'Pokemon 4', caught: false},
    {name: 'Pokemon 5', caught: false},
    {name: 'Pokemon 6', caught: false}
  ]

}
