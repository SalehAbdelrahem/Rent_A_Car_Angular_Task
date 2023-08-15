import { BookingDetailModel } from "./BookingDetail.model";

export class MasterDetailModel{

  customerName: string='';
  transactionDate=new Date();
  customerDrivingLicenseNo: string='';
  payment: string='';
  nationalityId: number=0;
  bookingDetailDTO:BookingDetailModel[]=[];

}
