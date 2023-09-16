import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodserviceService } from '../services/food/foodservice.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food!:Food;

  constructor(private route:ActivatedRoute,private foodService:FoodserviceService,private cartService:CartService,private router:Router)
  {
    this.route.params.subscribe(params => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }
  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }



}
