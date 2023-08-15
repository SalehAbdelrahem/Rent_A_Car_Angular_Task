import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CarModel } from 'src/app/Models/Car.model';
import { SearchCarModel } from 'src/app/Models/SearchCar.model';
import { CarService } from 'src/app/Services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  CarList: CarModel[] = []
  modelName: string=''
  brandName: string=''
  modelYear: string=''

  totalLength: any;
  page: number = 1;
  // SearchForm!: FormGroup;
  //SearchCarsModel: SearchCarModel=new SearchCarModel
  @Input() RecivedBrandId: number = 0;
  formBuilder: any;
  constructor(private CarService: CarService,
  ){

  }

  ngOnInit() {

    this.getAllCars();
    // this.SearchForm = this.formBuilder.group({
    //   modelName: [],
    //   brandName: [],
    //   modelYear: [],
    // });

  }
  getAllCars() {
    this.CarService.getCarList().subscribe({
      next: data => {
        this.CarList = data;
        this.totalLength = data.length;
      },
      error: err => console.log(err)
    })
  }


  searchCars() {

    this.CarService.SearchCarList(this.brandName, this.modelName, this.modelYear).subscribe({
      next: data => {
        this.CarList = data;
        this.totalLength = data.length;
      },
      error: err => console.log(err)
    })
  }

}

