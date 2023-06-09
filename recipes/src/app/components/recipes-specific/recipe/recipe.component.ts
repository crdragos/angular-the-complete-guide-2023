import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;

  ngOnInit(): void {
  }
}
