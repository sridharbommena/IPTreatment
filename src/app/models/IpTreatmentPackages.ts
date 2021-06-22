import { AilmentCategory } from "./AilmentCategory";
import { PackageDetail } from "./PackageDetail";

export interface IpTreatmentPackages{
    treatmentPackageId:number,
    ailmentCategory:AilmentCategory;
    packageDetail:PackageDetail;
    
}