import { Injectable } from '@angular/core';
import{ Food } from '../../shared/models/Food'
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAllFoodData().find(food => food.id == id)!;
  }

  getAllTags():Tag[]{
return[
    {name : "All", count: 14},
    {name : "FastFood", count: 14},
    {name : "Pizza", count: 2},
    {name : "Lunch", count: 4},
    {name:  "SlowFood", count: 2},
    {name:  "Fry",count: 1},
    {name:  "Hamburger",count: 1}
]
  }

  getAllFoodBySearchTerm(searchTerm:string):Food[]{
    return this.getAllFoodData().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

  }

  getAllFoodByTags(tag:string):Food[]{
    console.warn(tag)
    return tag =="All" ? this.getAllFoodData() : this.getAllFoodData().filter(Food => Food.tags?.includes(tag));
  }
  
  getAllFoodData():Food[]{
    return[
      {
        id: 1,
        name: 'Desert',
        cookTime: '10-15',
        price: 150,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Cake', 'Lunch'],
      },
      {
        id: 2,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 299,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 125,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'French fries',
        price: 110,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Pan cake',
        price: 110,
        cookTime: '20-30',
        favorite: true,
        origins: ['usa', 'france'],
        stars: 3.0,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Meatball',
        price: 200,
        cookTime: '45-55',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 7,
        name: 'Vegetables Pizza',
        price: 120,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food-7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }
    
    ]
  }
}
