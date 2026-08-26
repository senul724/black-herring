type Item = { name: string; desc?: string; price: string };
type Section = { title: string; items: Item[] };

export const specials = [
	{
		img: "/special-1.jpg",
		eyebrow: "This Week",
		title: "Lake Lobster Thermidor",
		price: "$28",
		note: "Whole lobster, brandy cream, gruyère gratiné — finished in the wood oven.",
	},
	{
		img: "/special-2.jpg",
		eyebrow: "Sharing",
		title: "Captain's Seafood Platter",
		price: "$38",
		note: "Tiger prawns, calamari, crab claws and the catch of the day. Built for two.",
	},
	{
		img: "/special-3.jpg",
		eyebrow: "From the Bar",
		title: "Smoked Maple Old-Fashioned",
		price: "$16",
		note: "Hickory-smoked rye, maple, charred orange. Served under glass.",
	},
	{
		img: "/dish-1.jpg",
		eyebrow: "Signature",
		title: "Whole Charred Tilapia",
		price: "$6 / 100g",
		note: "Lake-fresh tilapia, open-flame char, herb butter and lime.",
	},
	{
		img: "/dish-2.jpg",
		eyebrow: "Healthy",
		title: "Wasabi Prawn Bowl",
		price: "$18",
		note: "Sticky rice, kimchi slaw, lime chili soya, sesame crunch.",
	},
	{
		img: "/dish-3.jpg",
		eyebrow: "Bar",
		title: "Garden Mocktail Flight",
		price: "$12",
		note: "Three botanical pours — basil, lychee-rose, smoked pineapple.",
	},
];

export const menu: Section[] = [
	{
		title: "Burgers",
		items: [
			{
				name: "The Yankee",
				desc: "Crumb fried chicken breast, braised red cabbage, fries, mustard mayo",
				price: "15",
			},
			{
				name: "El Double",
				desc: "Grilled beef fillet, caramelised onion, fries, mustard mayo",
				price: "18",
			},
			{
				name: "Holy Chunk",
				desc: "Teriyaki pork belly, pickled vegetables, fries, mustard mayo",
				price: "16",
			},
		],
	},
	{
		title: "Healthy Bowls",
		items: [
			{
				name: "Chicken Bowl",
				desc: "Wasabi sticky rice, kimchi, pickles, sesame, lime chili soya dressing",
				price: "15",
			},
			{
				name: "Tuna Bowl",
				desc: "Wasabi sticky rice, kimchi, pickled onion, sesame, lime chili soya",
				price: "17",
			},
			{
				name: "Tofu Bowl",
				desc: "Wasabi sticky rice, kimchi, kidney beans, sesame, lime chili soya",
				price: "14",
			},
			{
				name: "Prawn Bowl",
				desc: "Wasabi sticky rice, kimchi, pickled onion, sesame, lime chili soya",
				price: "18",
			},
		],
	},
	{
		title: "Salads & Soups",
		items: [
			{
				name: "Asian Chicken Salad",
				desc: "Crispy noodles, sesame ginger dressing",
				price: "15",
			},
			{
				name: "Smoked Salmon Salad",
				desc: "Capers, dill cream, mixed leaves",
				price: "18",
			},
			{
				name: "Thai Seafood Soup",
				desc: "Tom Yum broth, prawn, squid, mushroom",
				price: "16",
			},
			{
				name: "Caesar Salad",
				desc: "Romaine, anchovy, parmesan, herbed croutons",
				price: "14",
			},
			{
				name: "Cream of Mushroom",
				desc: "Forest mushrooms, thyme, truffle oil drizzle",
				price: "12",
			},
		],
	},
	{
		title: "Signature Tilapia & Mains",
		items: [
			{
				name: "Whole Grilled Tilapia",
				desc: "Charcoal grilled, herb butter, lime — per 100g",
				price: "6",
			},
			{
				name: "Crispy Fried Tilapia",
				desc: "Devilled or with seeni sambol",
				price: "Per 100g · $8",
			},
			{
				name: "Grilled Beef Tenderloin",
				desc: "800g · red wine jus, roasted potato",
				price: "45",
			},
			{
				name: "Pork Ribs (Slow Cooked)",
				desc: "800g · sticky bourbon glaze",
				price: "38",
			},
			{
				name: "Whole Roast Chicken",
				desc: "800g · lemon, garlic, herbs",
				price: "36",
			},
			{
				name: "Lamb Shank",
				desc: "500g · braised, mashed potato",
				price: "42",
			},
		],
	},
	{
		title: "Island Delights",
		items: [
			{ name: "Chicken Curry, Roast Paan & Pol Sambal", price: "22" },
			{ name: "Beef Curry, Roast Paan & Pol Sambal", price: "24" },
			{ name: "Prawn Curry, Roast Paan & Pol Sambal", price: "26" },
			{ name: "Cuttlefish Curry, Roast Paan & Pol Sambal", price: "28" },
			{ name: "Seafood Combo, Roast Paan & Pol Sambal", price: "28" },
			{ name: "Vegetable Curry, Roast Paan & Pol Sambal", price: "20" },
		],
	},
	{
		title: "Pasta & Rice",
		items: [
			{ name: "Aglio e Olio Chicken", price: "18" },
			{ name: "Carbonara", price: "20" },
			{ name: "Seafood Marinara", price: "26" },
			{ name: "Prawn Pesto Linguine", price: "26" },
			{ name: "Nasi Goreng (Chicken / Prawn)", price: "22" },
			{ name: "Mixed Seafood Fried Rice", price: "24" },
		],
	},
	{
		title: "Sides",
		items: [
			{ name: "Garlic Bread", price: "6" },
			{ name: "Truffle Fries", price: "9" },
			{ name: "Steamed Jasmine Rice", price: "4" },
			{ name: "Mashed Potato", price: "6" },
			{ name: "Garden Salad", price: "6" },
		],
	},
	{
		title: "Cocktails & Mocktails",
		items: [
			{
				name: "Black Herring Sour",
				desc: "House gin, lime, egg white, angostura",
				price: "15",
			},
			{
				name: "Ocean Drive Mule",
				desc: "Vodka, ginger beer, lime",
				price: "14",
			},
			{
				name: "Tropic Spritz",
				desc: "Aperol, sparkling, orange",
				price: "14",
			},
			{ name: "Virgin Mojito", desc: "Mint, lime, soda", price: "9" },
			{ name: "Passion Cooler (mocktail)", price: "8" },
		],
	},
	{
		title: "Sweet Endings",
		items: [
			{ name: "Watalappan Crème Brûlée", price: "10" },
			{
				name: "Dark Chocolate Fondant",
				desc: "Vanilla ice cream",
				price: "12",
			},
			{ name: "Tropical Fruit Plate", price: "8" },
			{ name: "Trio of Ice Creams", price: "7" },
		],
	},
];
