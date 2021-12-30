const resturantMenu: any[]= [
	{
		name: 'sesame chicken',
		imagePath: 'sesame+chicken.jpeg',
		id: 1,
		description:
			'Chicken breast with savory sweet soy sauce glaze topped with sesame seeds.',
		price: 11.99,
		ingredients: [
			{
				name: 'chicken',
				qty: 0.5,
				unit: 'lb',
				ingredientId: 1,
			},
		],
		itemType: 'entree',
		category: 'poultry',
		notes:
			'Specialty item of the restaurant, frequenty goes out of stock, seasonal item',
		ranking: 1,
		restaurantName: 'Sample Resturant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'lemon chicken',
		imagePath: 'lemon+chicken.jpeg',
		id: 2,
		description: 'Chicken breast seasoned with lemons.',
		price: 11.99,
		ingredients: [
			{
				name: 'chicken',
				qty: 0.5,
				unit: 'lb',
				ingredientId: 1,
			},
			{
				name: 'lemons',
				qty: 1,
				unit: 'ea',
				ingredientId: 2,
			},
		],
		itemType: 'entree',
		category: 'poultry',
		notes: 'Lemons are fanstastic. Allergies to peanuts',
		ranking: 2,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'kentucky fried chicken',
		imagePath: 'kentucky+fried+chicken.jpeg',
		id: 3,
		description: 'Oven fried chicken, crunchy',
		price: 13.99,
		ingredients: [
			{
				name: 'chicken',
				qty: 0.5,
				unit: 'lb',
				ingredientId: 1,
			},
		],
		itemType: 'entree',
		category: 'poultry',
		notes: 'fried, spicy',
		ranking: 3,
		restaurantName: 'Sample Resturant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'buffalo wild wings',
		imagePath: 'barbecue+chicken+thigh.jpg.jpg',
		id: 4,
		description: 'fried chicken wings seasoned with uber spicy sauce',
		price: 12.99,
		ingredients: [
			{
				name: 'chicken wings',
				qty: 0.5,
				unit: 'lb',
				ingredientId: 7,
			},
		],
		itemType: 'entree',
		category: 'poultry',
		notes: 'spicy',
		ranking: 8,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'eggplant with fish sauce',
		imagePath: 'eggplant-fishsauce.jpg',
		id: 10,
		price: 10.99,
		description: 'eggplant with fish sauce, soy sauce, sweet and savory',
		ingredients: [
			{
				name: 'eggplant',
				qty: 3,
				unit: 'ea',
				ingredientId: '11',
			},
		],
		itemType: 'entree',
		category: 'vegetarian',
		notes: 'vegetarian',
		ranking: 1,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'egg foo yung',
		imagePath: 'egg+foo+young.jpg',
		id: 5,
		description: 'egg with cucumbers. No meat, Soy sauce flavoring',
		price: 9.99,
		ingredients: [
			{
				name: 'eggs',
				qty: 4,
				unit: 'ea',
				ingredientId: '3',
			},
			{
				name: 'cucumbers',
				qty: 3,
				unit: 'ea',
				ingredientId: 4,
			},
		],
		itemType: 'entree',
		category: 'vegetarian',
		notes: 'vegetarian',
		ranking: 2,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'ceasar salad',
		imagePath: 'ceasar+salad.jpg',
		id: 6,
		description:
			'Spinach and lettuce salad with grilled chicken. Ceasar dressing',
		price: 10.99,
		ingredients: [
			{
				name: 'chicken',
				qty: 0.25,
				unit: 'lb',
				ingredientId: 1,
			},
			{
				name: 'lettuce',
				qty: 0.25,
				unit: 'lb',
				ingredientId: 5,
			},
			{
				name: 'spinach',
				qty: 0.25,
				unit: 'lb',
				ingredientId: 6,
			},
		],
		itemType: 'entree',
		category: 'salad',
		notes: 'healthy',
		ranking: 1,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'mediterranean salad',
		imagePath: 'mediterranean+salad.jpeg',
		id: 7,
		description:
			'Spinach and lettuce salad with chicken. mediterranean items added. olives, pickles, grapes',
		price: 10.99,
		ingredients: [
			{
				name: 'chicken',
				qty: 0.25,
				unit: 'lb',
				ingredientId: 1,
			},
			{
				name: 'lettuce',
				qty: 0.25,
				unit: 'lb',
				ingredientId: 5,
			},
			{
				name: 'spinach',
				qty: 0.25,
				unit: 'lb',
				ingredientId: 6,
			},
			{
				name: 'grapes',
				qty: 0.1,
				unit: 'lb',
				ingredientId: 7,
			},
		],
		itemType: 'entree',
		category: 'salad',
		notes: 'healthy',
		ranking: 3,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'ban mi',
		imagePath: 'banh+mi.jpg',
		id: 8,
		description: 'korean sandwich with pork belly and lettuce',
		price: 13.99,
		ingredients: [
			{
				name: 'pork belly',
				qty: 0.25,
				unit: 'lb',
				ingredientId: 8,
			},
			{
				name: 'lettuce',
				qty: 0.25,
				unit: 'lb',
				ingredientId: 5,
			},
			{
				name: 'bread',
				qty: 1,
				unit: 'bun',
				ingredientId: 9,
			},
		],
		itemType: 'entree',
		category: 'sandwich',
		notes: 'korean',
		ranking: 3,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'hot dog',
		imagePath: 'hot+dog.png',
		id: 11,
		description: 'hot dog',
		price: 5.99,
		ingredients: [
			{
				name: 'hot dog',
				qty: 1,
				unit: 'ea',
				ingredientId: 12,
			},
			{
				name: 'bread',
				qty: 1,
				unit: 'bun',
				ingredientId: 9,
			},
		],
		itemType: 'entree',
		category: 'sandwich',
		notes: 'kids meal',
		ranking: 6,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
	{
		name: 'steak',
		imagePath: 'steak.jpg',
		id: 9,
		description: 'medium rare steak flavored with chicago seasoning',
		price: 19.99,
		ingredients: [
			{
				name: 'steak',
				qty: 0.5,
				unit: 'lb',
				ingredientId: 10,
			},
		],
		itemType: 'entree',
		category: 'beef',
		notes: 'good stuff',
		ranking: 1,
		restaurantName: 'Sample Restaurant',
		restaurantId: '29b70410-629e-41f0-bd3a-2644e336c912',
		visible: true,
	},
]
export function getMenuItemsById(resturantId: string){
    return resturantMenu;
}

export async function getMenuItemsByCategory(resturantId: string, category: string){
    let allItems=await getMenuItemsById(resturantId);
    let matchingCategoryItems;
    for (var item of allItems){
        if (item.category == category){
            matchingCategoryItems.push(item);
        }
    }    
    return matchingCategoryItems;
}

export async function getMenuItemsByItemType(resturantId: string, itemType:string){
    let allItems=await getMenuItemsById(resturantId);
    let matchingItemType;
    for(var item of allItems){
        if (item.itemType==itemType){
            matchingItemType.push(item);
        }
    }
    return matchingItemType;
}
