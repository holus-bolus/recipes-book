import {Component, OnInit} from '@angular/core';
import {IngredientModel} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:IngredientModel[] = [
    new IngredientModel('Cheese', 8),
    new IngredientModel('Meat', 10),

  ];

  constructor() {
  }

  ngOnInit() {
  }
}
