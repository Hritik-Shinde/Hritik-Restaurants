import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm:string ="";

  constructor(private activateRoute:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
      if(params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    })
  }
  
  search():void{
    this.router.navigateByUrl("/search/"+ this.searchTerm)
  }
}
