import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Receipe} from "../../receipe.model";

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrl: './receipe-item.component.css'
})
export class ReceipeItemComponent {
  @Input() receipe: Receipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onselect() {
    this.recipeSelected.emit();
  }

  constructor() { }
}
