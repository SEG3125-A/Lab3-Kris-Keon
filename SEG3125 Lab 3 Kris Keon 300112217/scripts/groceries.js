// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "non-organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nonOrganic: true,
		lactoseFree: true,
		price: 1.49,
		fruit: true,
		image: "/images/non-organic apple.jpg"
	},
	{
		name: "organic broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		lactoseFree: true,
		price: 1.89,
		vegetable: true,
		image: "/images/organic broccoli.jpg"
	},
	{
		name: "organic carrot",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		lactoseFree: true,
		price: 1.99,
		vegetable: true,
		image: "/images/organic carrot.jpg"
	},
	{
		name: "non-organic cauliflower",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		nonOrganic: true,
		lactoseFree: true,
		price: 2.35,
		vegetable: true,
		image: "/images/non-organic cauliflower.jpg"
	},
	{
		name: "white bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 2.39,
		image: "/images/white bread.jpg"
	},
	{
		name: "rye bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 2.79,
		image: "/images/rye bread.jpg"
	},
	{
		name: "organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		lactoseFree: true,
		price: 2.85,
		fruit: true,
		image: "/images/organic apple.jpg"
	},
	{
		name: "can of tomato soup",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 3.99,
		image: "/images/can of tomato soup.jpg"
	},
	{
		name: "carton of 12 eggs",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 4.99,
		image: "/images/carton of 12 eggs.jpg"
	},
	{
		name: "ice cream",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: false,
		price: 5.21,
		dairy: true,
		image: "/images/ice cream.jpg"
	},
	{
		name: "frozen pepperoni pizza",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		nonOrganic: true,
		lactoseFree: false,
		price: 5.99,
		image: "/images/frozen pepperoni pizza.jpg"
	},
	{
		name: "shredded wheat cereal",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 6.49,
		image: "/images/shredded wheat cereal.jpg"
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: false,
		price: 6.99,
		dairy: true,
		image: "/images/milk.jpg"
	},
	{
		name: "ground beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 7.99,
		meat: true,
		image: "/images/ground beef.jpg"
	},
	{
		name: "haddock",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 8.99,
		image: "/images/haddock.jpg"
	},	
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 10.00,
		image: "/images/salmon.jpg"
	}
];

//This fucntion will be used to further filter down the grocery options hsown using the filter check boxes
function restrictListProductsUsingFilter(prods, selections){

	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((selections == "Fruits") && (prods[i].vegetable == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Vegetables") && (prods[i].fruit == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Dairy") && (prods[i].dairy == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Meats") && (prods[i].meat == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {

	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NonOrganic") && (prods[i].nonOrganic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction) {
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "NonOrganic") && (prods[i].nonOrganic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_prices.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_prices.push(prods[i].price);
		}
	}
	return product_prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return "$" + totalPrice;
}