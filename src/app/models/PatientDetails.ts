import { AilmentCategory } from "./AilmentCategory";

export interface PatientDetails{
    name: string;
    age: number;
    aadharNumber:number;
    ailment: AilmentCategory;
    treatmentPackageName: string;
    TreatmentCommencementDate: Date;
}