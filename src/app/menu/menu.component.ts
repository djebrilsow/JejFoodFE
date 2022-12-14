import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  foods : Food[] =[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.get();
  };

  get(){
    console.log("test...................");
    this.foodService.getAll().subscribe((data) => {
      this.foods = data;
      console.log(this.foods);
    });
  }

}
