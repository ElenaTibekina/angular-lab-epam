import { Component, Input } from "@angular/core";
import { Card } from "../pokemons/pokemons.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  @Input() card: Card;
  caught: boolean;

  catchPokemon() {
    this.caught = !this.caught;
    if (this.caught) {
      console.log("Покемон " + this.card.name + " был пойман");
    } else {
      console.log("Покемон " + this.card.name + " был отпущен");
    }
  }
}
