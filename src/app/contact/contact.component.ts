import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  restaurants
  restaurantFilter
  selectedRestaurants

  constructor() { }

  ngOnInit() {
    this.restaurants = [{
      number: "1",
      name: "Albaani",
      fieldOffice: {
        name: "Field Office One"
      },
      coOp: {
        name: "CoOp One"
      }
    }, {
      number: "2",
      name: "Albaani X",
      fieldOffice: {
        name: "Field Office Two"
      },
      coOp: {
        name: "CoOp Two"
      }
    }];

    this.restaurantFilter = {
      number: undefined,
      name: undefined,
      fieldOffices: [],
      coOps: []
    }

    this.selectedRestaurants = []
  }

  clearFilters() {
    this.restaurantFilter = {
      number: undefined,
      name: undefined,
      fieldOffices: [],
      coOps: []
    }
  }

  handleRestauratSelectionChanged(selectedRestaurants) {
    this.selectedRestaurants = selectedRestaurants
  }

}
