import { images } from "./images";

export const categoryFood = [
  { id: 0, name: {eng: 'All', vn: 'Tất cả'}} ,
  { id: 1, name: {eng: 'Bakery', vn: 'Bánh mì'}},
  { id: 2, name: {eng: 'Biscuits & Confectioneries', vn: 'Bánh quy & Đồ ngọt'}},
  { id: 3, name: {eng: 'Dairy & alternatives', vn: 'Thực phẩm làm từ sữa & Thay thế sữa'}},
  { id: 4, name: {eng: 'Drinks', vn: 'Đồ uống'}},
  { id: 5, name: {eng: 'Eggs, Fish & seafood, & Meat', vn: 'Trứng, Hải sản & Thịt' }},
  { id: 6, name: {eng: 'Fruits', vn: 'Trái cây'}},
];

export const food = [
  {
    id: 1,
    name: {eng: 'Bread', vn: 'Bánh mì lạt'},
    amountPerServing: {eng:'2 medium slices', vn: '2 miếng vừa'},
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
    name: {eng: 'Brown bread', vn: 'Bánh mì nâu'},
    amountPerServing: {eng:'2 medium slices', vn: '2 miếng vừa'},
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
    name: {eng: 'Chocolate cake', vn: 'Bánh Socola'},
    amountPerServing: {eng: '1 slice', vn: '1 miếng'},
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
    name: {eng:'Doughnut', vn: 'Bánh vòng Donut'},
    amountPerServing: {eng: '1 doughnut', vn: '1 cái'},
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
    name: {eng: 'Sponge cake', vn: 'Bánh xốp mềm'},
    amountPerServing: {eng:'1 slice', vn: '1 miếng'},
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
    name: {eng: 'Biscuit', vn: 'Bánh quy tơ'},
    amountPerServing: {eng: '3 biscuits', vn: '3 cái'},
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
    name: {eng: 'Chocolate snack bar', vn: 'Thanh Socola ăn nhẹ'},
    amountPerServing: {eng: '1 bar', vn: '1 thanh'},
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
    name: {eng: 'Marshmallow', vn: 'Kẹo dẻo Marshmallow'},
    amountPerServing: {eng: '5 large marshmallows', vn: '5 viên lớn'},
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
    name: {eng:'Milk-based sweet', vn: 'Kẹo ngọt từ sữa'},
    amountPerServing: {eng: '1 piece', vn: '1 viên'},
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
    name: {eng:'Almond milk', vn: 'Sữa hạnh nhân'},
    amountPerServing: {eng: '1 small glass', vn: '1 ly nhỏ'},
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
    id: 12,
    name: {eng:'Milk', vn: 'Sữa tươi'},
    amountPerServing: {eng: '1 small glass', vn: '1 ly nhỏ'},
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
    id: 13,
    name: {eng:'Mozzarella', vn:'Phô mai Mozzarella'},
    amountPerServing: {eng: '2 thumbs', vn: 'Miếng cở 2 ngón tay'},
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
    id: 14,
    name: {eng: 'Oatmilk', vn: 'Sữa yên mạch'},
    amountPerServing: {eng:'1 small glass', vn: '1 ly nhỏ'},
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
    id: 15,
    name: {eng: 'Ice cream', vn: 'Kem tươi'},
    amountPerServing: {eng: '2 scoops', vn: '2 muỗng'},
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
    id: 16,
    name: {eng: 'Soy milk', vn: 'Sữa đậu nành'},
    amountPerServing: {eng: '1 small glass', vn: '1 ly nhỏ'},
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
    id: 17,
    name: {eng: 'Apple juice', vn: 'Nước táo ép'},
    amountPerServing: {eng: '2 small glass', vn: '2 ly nhỏ'},
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
    id: 18,
    name: {eng: 'Americano', vn: 'Cà phê Americano'},
    amountPerServing: {eng: '1 small americano', vn: '1 ly nhỏ'},
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
    id: 19,
    name: {eng: 'Beer', vn: 'Bia tươi'},
    amountPerServing: {eng: '1 glass', vn: '1 ly'},
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
    id: 20,
    name: {eng: 'Black tea/Green tea', vn: 'Trà đen/Trà xanh'},
    amountPerServing: {eng: '1 mug', vn: '1 tách'},
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
    id: 21,
    name: {eng: 'Cappuccino', vn: 'Cà phê Capuccino'},
    amountPerServing: {eng: '1 small cappuccino', vn: '1 ly nhỏ'},
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
    id: 22,
    name: {eng: 'Latte', vn: 'Cà phê Latte'},
    amountPerServing: {eng: '1 small latte', vn: '1 ly nhỏ'},
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
    id: 38,
    name: {eng: 'Soft drink', vn: 'Nước ngọt'},
    amountPerServing: {eng: '1 can', vn: '1 lon'},
    quantity: 330,
    categoryId: 4,
    envCost: 205,
    imageUrl: images.soft_drink,
    equivalent: [
      { travelId: 1, equivalent: 56.8 },
      { travelId: 2, equivalent: 69.5 },
      { travelId: 3, equivalent: 300.7 }
    ]
  },
  {
    id: 23,
    name: {eng: 'Egg', vn: 'Trứng'},
    amountPerServing: {eng: '2 eggs', vn: '2 trứng'},
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
    id: 24,
    name: {eng: 'Crab', vn: 'Cua'},
    amountPerServing: {eng: '1 medium crab', vn: '1 con cỡ vừa'},
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
    id: 25,
    name: {eng: 'Lobster', vn: 'Tôm hùm'},
    amountPerServing: {eng: '1 medium lobster', vn: '1 con cỡ vừa'},
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
    id: 26,
    name: {eng: 'Oyster', vn: 'Hàu'},
    amountPerServing: {eng: '5 oysters', vn: '5 con'},
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
    id: 27,
    name: {eng: 'Salmon', vn: 'Cá hồi'},
    amountPerServing: {eng: '1 piece', vn: '1 miếng'},
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
    id: 28,
    name: {eng: 'Shrimp', vn: 'Tôm'},
    amountPerServing: {eng: '5 shrimps', vn: '5 con'},
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
    id: 29,
    name: {eng: 'Pork', vn: 'Thịt heo'},
    amountPerServing: {eng: '1 piece', vn: '1 miếng'},
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
    id: 30,
    name: {eng: 'Chicken', vn: 'Thịt gà'},
    amountPerServing: {eng: '1 breast', vn: '1 ức'},
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
    id: 31,
    name: {eng: 'Apple', vn: 'Táo'},
    amountPerServing: {eng: '2 apples', vn: '2 quả'},
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
    id: 32,
    name: {eng: 'Avocado', vn: 'Bơ'},
    amountPerServing: {eng: '1 avocado', vn: '1 quả'},
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
    id: 33,
    name: {eng: 'Banana', vn: 'Chuối'},
    amountPerServing: {eng: '1 banana', vn: '1 quả'},
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
    id: 34,
    name: {eng: 'Kiwi', vn: 'Kiwi'},
    amountPerServing: {eng: '1 kiwi fruit', vn: '1 quả'},
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
    id: 35,
    name: {eng: 'Mango', vn: 'Xoài'},
    amountPerServing: {eng: '2 slices', vn: '2 miếng'},
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
    id: 36,
    name: {eng: 'Strawberry', vn: 'Dâu tây'},
    amountPerServing: {eng: '1 handful', vn: '1 năm đầy'},
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

export const member = [
  {
    id: 4,
    name: 'Du Hoàng Anh',
    imageUrl: images.member_hoanh_anh,
  },
  {
    id: 5,
    name: 'Nguyễn Khánh Đạt',
    imageUrl: images.member_khach_dat,
  },
  {
    id: 1,
    name: 'Thái Thị Ngọc Nhung',
    imageUrl: images.member_ngoc_nhung ,
  },
  {
    id: 2,
    name: 'Nguyễn Mai Hoàng Oanh',
    imageUrl: images.member_hoanh_oanh,
  },
  {
    id: 3,
    name: 'Nguyễn Hữu Thắng',
    imageUrl: images.member_huu_thang,
  },
  
]

export const funded = [
  {
    id: 4,
    imageUrl: images.tus_goverment,
  },
  {
    id: 1,
    imageUrl: images.american_center_hcmc,
  },
  {
    id: 2,
    imageUrl: images.for_good_vietnam,
  },
  {
    id: 3,
    imageUrl: images.green_move,
  },
 
]