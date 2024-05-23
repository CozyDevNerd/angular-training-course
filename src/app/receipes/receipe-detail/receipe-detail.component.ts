import { Component, Input } from '@angular/core';
import {Receipe} from "../receipe.model";

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrl: './receipe-detail.component.css'
})
export class ReceipeDetailComponent {
  @Input() receipe: Receipe;


}
