export class SearchCarModel
{
  brandName:string;
  modelName:string;
  modelYear:Date;

  constructor(modelName:string, brandName:string, modelYear:Date){
    this.modelName = modelName
    this.modelYear = modelYear
    this.brandName=brandName
  }
}
