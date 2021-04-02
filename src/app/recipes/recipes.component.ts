import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
	recipes=[];
  constructor(private recipeService:RecipeService) {}

  ngOnInit() {
  	this.recipes=this.recipeService.getRecipes();
  }
 
recipe:[];
 onSelect(recipe){
 	this.recipe= recipe;
 }
}
