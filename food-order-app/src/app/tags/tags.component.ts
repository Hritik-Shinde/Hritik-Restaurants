import { Component , Input, OnInit} from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodserviceService } from '../services/food/foodservice.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center'; 

  tags?:Tag[];
  constructor(private food:FoodserviceService){

  }
  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.food.getAllTags();
  }

}
