import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe";
import {RecipesService} from "../../../services/recipes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Recipe[] = [];

  recipesSubscription: Subscription;

  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.recipesSubscription = this.recipesService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          console.log('recipes:' + recipes);
          this.recipes = recipes;
        }
      );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }
}
