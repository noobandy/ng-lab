import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  @Input() restaurants
  @Input() restaurantFilter
  @Output() selectionChanged = new EventEmitter()

  selectedRestaurants
  selectAll

  constructor() { }

  ngOnInit() {
    this.selectedRestaurants = [];
    this.selectAll = false
  }

  public showFieldOffice():Boolean {
    let show:Boolean = false
      let lastFieldOffice = undefined
      for(let restaurant of this.restaurants) {
        if(lastFieldOffice && lastFieldOffice.name !== restaurant.fieldOffice.name) {
          show = true
          break;
        } else {
          lastFieldOffice = restaurant.fieldOffice
        }
      }

    return show;

  }

  public showCoOp() {
    let show:Boolean = false
      let lastCoOp = undefined
      for(let restaurant of this.restaurants) {
        if(lastCoOp && lastCoOp.name !== restaurant.coOp.name) {
          show = true
          break;
        } else {
          lastCoOp = restaurant.coOp
        }
      }
 
    return show;
  }

  public fieldOfficeFilterOptions() {
    let options = []
    this.restaurants.forEach(restaurant => {
      if(options.indexOf(restaurant.fieldOffice) < 0) {
        options.push(restaurant.fieldOffice)
      }
    });
    return options;
  }

  public coOpFilterOptions() {
    let options = []
    this.restaurants.forEach(restaurant => {
      if(options.indexOf(restaurant.coOp) < 0) {
        options.push(restaurant.coOp)
      }
    });
    return options;
  }

  public filteredRestaurants() {
    let filtered = []

    if(this.restaurantFilter.number || this.restaurantFilter.name || 
      this.restaurantFilter.fieldOffices.length > 0 || this.restaurantFilter.coOps.length > 0) {
        for(let restaurant of this.restaurants) {
          if(this.restaurantFilter.number && restaurant.number.indexOf(this.restaurantFilter.number) < 0) {
            continue
          }

          if(this.restaurantFilter.name && restaurant.name.indexOf(this.restaurantFilter.name) < 0) {
            continue
          }

          if(this.restaurantFilter.fieldOffices.length > 0 && this.restaurantFilter.fieldOffices.indexOf(restaurant.fieldOffice) < 0) {
            continue
          }

          if(this.restaurantFilter.coOps.length > 0 && this.restaurantFilter.coOps.indexOf(restaurant.coOp) < 0) {
            continue
          }

          filtered.push(restaurant)
        }
    } else {
      filtered.push(...this.restaurants)
    }

    return filtered
  }

  public handleSelect(restaurant) {
    let pos = this.selectedRestaurants.indexOf(restaurant)
    if(pos >= 0) {
      this.selectedRestaurants.splice(pos, 1)
    } else {
      this.selectedRestaurants.push(restaurant)
    }

    this.selectionChanged.emit(this.selectedRestaurants)
  }

  public handleSelectAll() {
    if(this.selectAll) {
      for(let restaurant of this.filteredRestaurants()) {
        if(this.selectedRestaurants.indexOf(restaurant) < 0) {
          this.selectedRestaurants.push(restaurant)
        }
      }
    } else {
      for(let restaurant of this.filteredRestaurants()) {
        let pos = this.selectedRestaurants.indexOf(restaurant)
        if(pos >= 0) {
          this.selectedRestaurants.splice(pos, 1)
        }
      }
    }
    this.selectionChanged.emit(this.selectedRestaurants)
  }
}
