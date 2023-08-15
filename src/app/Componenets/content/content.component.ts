import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingDetailModel } from 'src/app/Models/BookingDetail.model';
import { MasterDetailModel } from 'src/app/Models/MasterDetail.model';
import { Nationality } from 'src/app/Models/Nationality.model';
import { CarService } from 'src/app/Services/car.service';
import { MasterDetailService } from 'src/app/Services/master-detail.service';
import { NationalityService } from 'src/app/Services/nationality.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit , OnChanges {
  @Input() RecivedBrandId: number = 0;
  CarList: any;
  NationalityList:Nationality[]=[]
  MasterDetailForm!: FormGroup;
  MasterDetailModel: MasterDetailModel = new MasterDetailModel;
  constructor(private MasterDetailsService: MasterDetailService,
    private formBuilder: FormBuilder,
    private NationalityService: NationalityService,
    private CarService: CarService
  ) {

  }
  ngOnInit() {
    this.MasterDetailForm = this.formBuilder.group({
      customerName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      transactionDate: [new Date(), [Validators.required]],
      customerDrivingLicenseNo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      payment: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nationalityId: [0, [Validators.required]],

      bookingDetailDTO: this.formBuilder.array([this.createBookingDetail()])
    });
    this.GetNationality();
  }
  GetNationality(){
    this.NationalityService.getNationalityList().subscribe({
      next: data => {
        console.log(data);
        this.NationalityList = data;
      },
      error: err => console.log(err)
    })
  }

  ngOnChanges(){
    this.CarService.getCarListByBrandId(this.RecivedBrandId).subscribe({
      next: data => {
        console.log(data);
        this.CarList = data;
      },
      error: err => console.log(err)
    })
  }
  createBookingDetail(): FormGroup {
    return this.formBuilder.group({
      id: [0],
      carName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      quantity: [0, [Validators.required]],
      rentDuration: [new Date(), [Validators.required]],
    });
  }

  addBookingDetails(){
    this.bookingDetailDTO.push(this.createBookingDetail())
  }

  deleteBookingDetails(itemId: number){
    this.bookingDetailDTO.removeAt(itemId)
  }
  get bookingDetailDTO(): FormArray {
    return <FormArray>this.MasterDetailForm.get('bookingDetailDTO');
  }


  createMasterDetail(){
    if (this.MasterDetailForm.invalid) {

      Swal.fire('!Please Enter Complete Data','<i class="fas fa-circle-exclamation"></i>' ,'warning');
    }
    else
    {
      Swal.fire({
        title: "Are you want to add ?",
        text: '?Are you sure   ',
        icon: 'question',
        confirmButtonColor: '#0a51f7',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        showCloseButton:true,
        confirmButtonText: "<h5 style='width:24px;height:22px;color:#fff'>" + "Yes" + "</h5>",
        cancelButtonText: "<h5 style='width:24px;height:22px;color:#fff'>" + "No" + "</h5>",

      }).then((result) => {
        if (result.value) {
          this.MasterDetailsService.CreateRentCare(this.MasterDetailForm.value).subscribe({

            next: data => {
              if (data){
                Swal.fire(
                  'Add Successfully','Successfully',
                  'success'
                );
                this.MasterDetailForm.reset();
              }
              else {
                Swal.fire(
                  'Error Occured',
                  'warning',
                  'warning',
                );
              }

            },
            error: err => {
              Swal.fire(
                'Error occurred',

                'Warning'
              );
            }
          })
        }
        else{
          console.log("assd"+ result.value);

        }
      });
    }

  }



}
