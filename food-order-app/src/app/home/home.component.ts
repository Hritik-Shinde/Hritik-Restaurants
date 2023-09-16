import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private FoodService: FoodserviceService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) 
        this.foods = this.FoodService.getAllFoodBySearchTerm(params['searchTerm']);
      else if(params['tag'])
        this.foods = this.FoodService.getAllFoodByTags(params['tag']);
      else
        this.foods = this.FoodService.getAllFoodData();
      
    })
  }
}
