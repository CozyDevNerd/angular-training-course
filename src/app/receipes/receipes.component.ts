import { Component } from '@angular/core';
import {Receipe} from "./receipe.model";

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrl: './receipes.component.css'
})
export class ReceipesComponent {
  selectedReceipe: Receipe;

  recipes = [];
}
