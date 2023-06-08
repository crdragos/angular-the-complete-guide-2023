import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../../services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {Ingredient} from "../../../models/ingredient";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
  }

  onAddPressed(addIngredientForm: NgForm): void {
    let values = addIngredientForm.value;
    const ingredient: Ingredient = new Ingredient(values.name, values.amount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
