import { Component } from '@angular/core';
import { BrandModel } from 'src/app/Models/Brand.model';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  BrandList: BrandModel[] = [];
   BrandId:number = 0;
  constructor(private BrandsService: BrandService,

  ) {

  }
  ngOnInit(): void {
    this.getAllBrands();
  }
  getAllBrands() {
    this.BrandsService.getBrandList().subscribe({
      next: data => {
        console.log(data);
        this.BrandList = data;
      },
      error: err => console.log(err)
    })
  }
  onNgModelChange(event:any){

  }
}
