import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test Recipe', 'This is the Description', 'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A test Recipe', 'This is the Description', 'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
