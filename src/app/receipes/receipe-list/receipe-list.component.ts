import {Component, EventEmitter, Output} from '@angular/core';
import { Receipe} from "../receipe.model";

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrl: './receipe-list.component.css'
})
export class ReceipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Receipe>();
  receipes: Receipe[] = [
    new Receipe('A Test Recipe', 'Test Description', 'https://t3.ftcdn.net/jpg/01/79/59/92/360_F_179599293_7mePKnajSM4bggDa8NkKpcAHKl3pow2l.jpg'),
    new Receipe('2nd Recipe', 'Test Description', 'https://t3.ftcdn.net/jpg/01/79/59/92/360_F_179599293_7mePKnajSM4bggDa8NkKpcAHKl3pow2l.jpg'),
    new Receipe('Final Recipe', 'Test Description', 'https://t3.ftcdn.net/jpg/01/79/59/92/360_F_179599293_7mePKnajSM4bggDa8NkKpcAHKl3pow2l.jpg'),
  ];

  onRecipeSelected(recipe: Receipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
