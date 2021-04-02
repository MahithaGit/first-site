
export class RecipeService{

	private recipes=[
	{ name:"manago", 
	  image:"../../assets/images/mango.jpg",
	  desc:"All TIme favourite fruit"
	 },
	 { name:"Apple", 
	  image:"../../assets/images/apple.jpg",
	  desc:"Healthy fruit"
	 },
	 { name:"Grapes", 
	  image:"../../assets/images/grapes.jpg",
	  desc:"Seasonal fruit"
	 },

	];
getRecipes(){
	return this.recipes;
}
}