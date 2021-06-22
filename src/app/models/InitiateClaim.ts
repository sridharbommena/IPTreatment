import { AilmentCategory } from "./AilmentCategory";

export interface InitiateClaim {

    id:number;
	patientName:string;
	ailment:AilmentCategory;
	insurerName:string;
	
}
