import { images } from "./images";

export const categoryFood = [
  { id: 1, name: 'Bakery' },
  { id: 2, name: 'Biscuits & Confectioneries' },
  { id: 3, name: 'Dairy & alternatives' },
  { id: 4, name: 'Drinks' },
  { id: 5, name: 'Eggs, Fish & seafood, & Meat' },
  { id: 6, name: 'Fruits' },
];

export const food = [
  {
    id: 1,
    name: 'Bread',
    mountPerServing: '2 medium slices',
    quantity: 80,
    categoryId: 1,
    envCost: 97,
    imageUrl: images.bread,
    equivalent: [
      { travelId: 1, equivalent: 26.9 },
      { travelId: 2, equivalent: 32.9 },
      { travelId: 3, equivalent: 142.4 }
    ]
  },
  {
    id: 2,
    name: 'Brown bread',
    mountPerServing: '2 medium slices',
    quantity: 80,
    categoryId: 1,
    envCost: 88,
    imageUrl: images.brown_bread,
    equivalent: [
      { travelId: 1, equivalent: 24.4 },
      { travelId: 2, equivalent: 29.8 },
      { travelId: 3, equivalent: 129.1 }
    ]
  },
  {
    id: 3,
    name: 'Chocolate cake',
    mountPerServing: '1 slice',
    quantity: 120,
    categoryId: 1,
    envCost: 440,
    imageUrl: images.chocolate_cake,
    equivalent: [
      { travelId: 1, equivalent: 121.9 },
      { travelId: 2, equivalent: 149.1 },
      { travelId: 3, equivalent: 644.9 }
    ]
  },
  {
    id: 4,
    name: 'Doughnut',
    mountPerServing: '1 doughnut',
    quantity: 75,
    categoryId: 1,
    envCost: 493,
    imageUrl: images.doughnut,
    equivalent: [
      { travelId: 1, equivalent: 136.7 },
      { travelId: 2, equivalent: 167.1 },
      { travelId: 3, equivalent: 723.0 }
    ]
  },
  {
    id: 5,
    name: 'Sponge cake',
    mountPerServing: '1 slice',
    quantity: 120,
    categoryId: 1,
    envCost: 368,
    imageUrl: images.sponge_cake,
        equivalent: [
      { travelId: 2, equivalent: 101.8 },
      { travelId: 2, equivalent: 124.5 },
      { travelId: 3, equivalent: 538.8 }
    ]
  },
  {
    id: 6,
    name: 'Biscuit',
    mountPerServing: '3 biscuits',
    quantity: 45,
    categoryId: 2,
    envCost: 59,
    imageUrl: images.biscuit,    
    equivalent: [
      { travelId: 1, equivalent: 16.2 },
      { travelId: 2, equivalent: 19.8 },
      { travelId: 3, equivalent: 85.9 }
    ]
  },
  {
    id: 7,
    name: 'Chocolate snack bar',
    mountPerServing: '1 bar',
    quantity: 32,
    categoryId: 2,
    envCost: 162,
    imageUrl: images.chocolate_snack_bar,
    equivalent: [
      { travelId: 1, equivalent: 44.9 },
      { travelId: 2, equivalent: 54.9 },
      { travelId: 3, equivalent: 237.7 }
    ]
  },
  {
    id: 8,
    name: 'Marshmallow',
    mountPerServing: '5 large marshmallows',
    quantity: 35,
    categoryId: 2,
    envCost: 84,
    imageUrl: images.marshmallow,
    equivalent: [
      { travelId: 1, equivalent: 23.4 },
      { travelId: 2, equivalent: 28.6 },
      { travelId: 3, equivalent: 137.7 }
    ]
  },
  {
    id: 9,
    name: 'Milk-based sweet',
    mountPerServing: 'Milk-based sweet',
    quantity: 10,
    categoryId: 2,
    envCost: 42,
    imageUrl: images.milk_based_sweet,
    equivalent: [
      { travelId: 1, equivalent: 11.7 },
      { travelId: 2, equivalent: 14.3 },
      { travelId: 3, equivalent: 61.7 }
    ]
  },
  {
    id: 11,
    name: 'Almond milk',
    mountPerServing: '1 small glass',
    quantity: 200,
    categoryId: 3,
    envCost: 113,
    imageUrl: images.almond_milk,
    equivalent: [
      { travelId: 1, equivalent: 31.3 },
      { travelId: 2, equivalent: 38.3 },
      { travelId: 3, equivalent: 165.6 }
    ]
  },
  {
    id: 11,
    name: 'Milk',
    mountPerServing: '1 small glass',
    quantity: 200,
    categoryId: 3,
    envCost: 352,
    imageUrl: images.milk,
    equivalent: [
      { travelId: 1, equivalent: 97.6 },
      { travelId: 2, equivalent: 119.3 },
      { travelId: 3, equivalent: 516.2 }
    ]
  },
  {
    id: 12,
    name: 'Mozzarella',
    mountPerServing: '2 thumbs',
    quantity: 20,
    categoryId: 3,
    envCost: 193,
    imageUrl: images.mozzarella,
    equivalent: [
      { travelId: 1, equivalent: 53.5 },
      { travelId: 2, equivalent: 65.4 },
      { travelId: 3, equivalent: 283.1 }
    ]
  },
  {
    id: 12,
    name: 'Oatmilk',
    mountPerServing: '1 small glass',
    quantity: 200,
    categoryId: 3,
    envCost: 71,
    imageUrl: images.oatmilk,
    equivalent: [
      { travelId: 1, equivalent: 19.8 },
      { travelId: 2, equivalent: 24.2 },
      { travelId: 3, equivalent: 104.5 }
    ]
  },
  {
    id: 12,
    name: 'Ice cream',
    mountPerServing: '2 scoops',
    quantity: 120,
    categoryId: 3,
    envCost: 458,
    imageUrl: images.ice_cream,
    equivalent: [
      { travelId: 1, equivalent: 126.4 },
      { travelId: 2, equivalent: 154.5 },
      { travelId: 3, equivalent: 668.4 }
    ]
  },
  {
    id: 13,
    name: 'Soy milk',
    mountPerServing: '1 small glass',
    quantity: 200,
    categoryId: 3,
    envCost: 156,
    imageUrl: images.soy_milk,
    equivalent: [
      { travelId: 1, equivalent: 44.3 },
      { travelId: 2, equivalent: 53.0 },
      { travelId: 3, equivalent: 229.2 }
    ]
  },
  {
    id: 14,
    name: 'Apple juice',
    mountPerServing: '2 small glass',
    quantity: 150,
    categoryId: 4,
    envCost: 366,
    imageUrl: images.apple_juice,
    equivalent: [
      { travelId: 1, equivalent: 101.4 },
      { travelId: 2, equivalent: 124.0 },
      { travelId: 3, equivalent: 536.3 }
    ]
  },
  {
    id: 15,
    name: 'Americano',
    mountPerServing: '1 small americano',
    quantity: 120,
    categoryId: 4,
    envCost: 85,
    imageUrl: images.americano,
    equivalent: [
      { travelId: 1, equivalent: 23.5 },
      { travelId: 2, equivalent: 28.7 },
      { travelId: 3, equivalent: 124.1 }
    ]
  },
  {
    id: 16,
    name: 'Beer',
    mountPerServing: '1 glass',
    quantity: 400,
    categoryId: 4,
    envCost: 307,
    imageUrl: images.beer,
    equivalent: [
      { travelId: 1, equivalent: 85.1 },
      { travelId: 2, equivalent: 104.0 },
      { travelId: 3, equivalent: 450.0 }
    ]
  },
  {
    id: 17,
    name: 'Black tea/Green tea',
    mountPerServing: '1 mug',
    quantity: 400,
    categoryId: 4,
    envCost: 242,
    imageUrl: images.black_tea_green_tea,
    equivalent: [
      { travelId: 1, equivalent: 67.0 },
      { travelId: 2, equivalent: 82.0 },
      { travelId: 3, equivalent: 354.7 }
    ]
  },
  {
    id: 18,
    name: 'Cappuccino',
    mountPerServing: '1 small cappuccino',
    quantity: 140,
    categoryId: 4,
    envCost: 226,
    imageUrl: images.cappuccino,
    equivalent: [
      { travelId: 1, equivalent: 62.5 },
      { travelId: 2, equivalent: 76.5 },
      { travelId: 3, equivalent: 330.8 }
    ]
  },
  {
    id: 19,
    name: 'Latte',
    mountPerServing: '1 small latte',
    quantity: 240,
    categoryId: 4,
    envCost: 387,
    imageUrl: images.latte,
    equivalent: [
      { travelId: 1, equivalent: 107.2 },
      { travelId: 2, equivalent: 131.1 },
      { travelId: 3, equivalent: 567.1 }
    ]
  },
  {
    id: 20,
    name: 'Egg',
    mountPerServing: '2 eggs',
    quantity: 120,
    categoryId: 5,
    envCost: 541,
    imageUrl: images.egg,
    equivalent: [
      { travelId: 1, equivalent: 149.7 },
      { travelId: 2, equivalent: 183.1 },
      { travelId: 3, equivalent: 792.2 }
    ]
  },
  {
    id: 21,
    name: 'Crab',
    mountPerServing: '1 medium crab',
    quantity: 65,
    categoryId: 5,
    envCost: 1153,
    imageUrl: images.crab,
    equivalent: [
      { travelId: 1, equivalent: 319.5 },
      { travelId: 2, equivalent: 390.7 },
      { travelId: 3, equivalent: 1690.1 }
    ]
  },
  {
    id: 22,
    name: 'Lobster',
    mountPerServing: '1 medium lobster',
    quantity: 295,
    categoryId: 5,
    envCost: 5235,
    imageUrl: images.lobster,
    equivalent: [
      { travelId: 1, equivalent: 1449.9 },
      { travelId: 2, equivalent: 1773.1 },
      { travelId: 3, equivalent: 7670.2 }
    ]
  },
  {
    id: 23,
    name: 'Oyster',
    mountPerServing: '5 oysters',
    quantity: 70,
    categoryId: 5,
    envCost: 213,
    imageUrl: images.oyster,
    equivalent: [
      { travelId: 1, equivalent: 58.9 },
      { travelId: 2, equivalent: 72.0 },
      { travelId: 3, equivalent: 311.4 }
    ]
  },
  {
    id: 24,
    name: 'Salmon',
    mountPerServing: '1 piece',
    quantity: 170,
    categoryId: 5,
    envCost: 814,
    imageUrl: images.salmon,
    equivalent: [
      { travelId: 1, equivalent: 225.4 },
      { travelId: 2, equivalent: 275.6 },
      { travelId: 3, equivalent: 1192.4 }
    ]
  },
  {
    id: 25,
    name: 'Shrimp',
    mountPerServing: '5 shrimps',
    quantity: 120,
    categoryId: 5,
    envCost: 2129,
    imageUrl: images.shrimp,
    equivalent: [
      { travelId: 1, equivalent: 589.8 },
      { travelId: 2, equivalent: 721.2 },
      { travelId: 3, equivalent: 3120.1 }
    ]
  },
  {
    id: 26,
    name: 'Pork',
    mountPerServing: '1 piece',
    quantity: 160,
    categoryId: 5,
    envCost: 1061,
    imageUrl: images.pork,
    equivalent: [
      { travelId: 1, equivalent: 293.7 },
      { travelId: 2, equivalent: 359.2 },
      { travelId: 3, equivalent: 1553.9 }
    ]
  },
  {
    id: 27,
    name: 'Chicken',
    mountPerServing: '1 breast',
    quantity: 150,
    categoryId: 5,
    envCost: 708,
    imageUrl: images.chicken,
    equivalent: [
      { travelId: 1, equivalent: 195.5 },
      { travelId: 2, equivalent: 239.1 },
      { travelId: 3, equivalent: 1024.3 }
    ]
  },
  {
    id: 28,
    name: 'Apple',
    mountPerServing: '2 apples',
    quantity: 160,
    categoryId: 6,
    envCost: 144,
    imageUrl: images.apple,
    equivalent: [
      { travelId: 1, equivalent: 39.9 },
      { travelId: 2, equivalent: 48.4 },
      { travelId: 3, equivalent: 211.0 }
    ]
  },
  {
    id: 29,
    name: 'Avocado',
    mountPerServing: '1 avocado',
    quantity: 170,
    categoryId: 6,
    envCost: 408,
    imageUrl: images.avocado,
    equivalent: [
      { travelId: 1, equivalent: 113.0 },
      { travelId: 2, equivalent: 138.2 },
      { travelId: 3, equivalent: 597.8 }
    ]
  },
  {
    id: 30,
    name: 'Banana',
    mountPerServing: '1 banana',
    quantity: 120,
    categoryId: 6,
    envCost: 156,
    imageUrl: images.banana,
    equivalent: [
      { travelId: 1, equivalent: 43.2 },
      { travelId: 2, equivalent: 52.8 },
      { travelId: 3, equivalent: 228.6 }
    ]
  },
  {
    id: 31,
    name: 'Kiwi',
    mountPerServing: '1 kiwi fruit',
    quantity: 120,
    categoryId: 6,
    envCost: 47,
    imageUrl: images.kiwi,
    equivalent: [
      { travelId: 1, equivalent: 13.1 },
      { travelId: 2, equivalent: 16.0 },
      { travelId: 3, equivalent: 89.1 }
    ]
  },
  {
    id: 32,
    name: 'Mango',
    mountPerServing: '2 slices',
    quantity: 80,
    categoryId: 6,
    envCost: 352,
    imageUrl: images.mango,
    equivalent: [
      { travelId: 1, equivalent: 97.5 },
      { travelId: 2, equivalent: 119.2 },
      { travelId: 3, equivalent: 51.8 }
    ]
  },
  {
    id: 33,
    name: 'Strawberry',
    mountPerServing: '1 handful',
    quantity: 80,
    categoryId: 6,
    envCost: 179,
    imageUrl: images.strawberry,
    equivalent: [
      { travelId: 1, equivalent: 49.7 },
      { travelId: 2, equivalent: 60.8 },
      { travelId: 3, equivalent: 262.9 }
    ]
  }
]