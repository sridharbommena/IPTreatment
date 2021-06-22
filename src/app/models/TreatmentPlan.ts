import { PatientDetails } from "./PatientDetails";
export interface TreatmentPlan{
    packageId: number;
    packageName: string;
    testDetails: string[]; 
    cost: number;
    specialist: string;
    treatmentCommencementDate: Date;
    treatmentEndDate: Date;
    status: string;
    patientDetails: PatientDetails;
}