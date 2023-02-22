import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Salad Cesar', 'A recipe of a salad', 'https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg'),
    new Recipe('Schnitzel', 'A recipe of a schnitzel', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG'),
    new Recipe('Bouillabaisse', 'A recipe of a Bouillabaisse', 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-bouillabaisse_ss.jpg'),
    ];

  constructor() {
  }

  ngOnInit() {
  }
}
