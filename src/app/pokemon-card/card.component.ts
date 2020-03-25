import { Component, Input } from "@angular/core";
import { Card } from "../app.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  @Input() card: Card;

  // name: string = 'Pokemon Name'
  buttonText: string = "Catch me!";
  caught = false;

  catchPokemon() {
    this.buttonText = "You caught me!";
  }
}
