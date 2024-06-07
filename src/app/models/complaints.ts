import { User } from "./user";
export interface Category {
  id?: number;
  name: string;
  iconUrl: string;
}

export interface Priority{
  id?:number;
  name: string;
  iconUrl:string;
}

export interface Status {
  id?:number;
  name: string;
  iconUrl:string;
}


export interface Complaint {
  reporter: User | string;
  id: number;
  complaintDate: string | Date;
  incidentDate: string | Date;
  category: Category | string;
  priority: Priority | string;
  subject: string;
  description: string;
  evidence?: string[];
  witness?: User | string;
  previousComplaint?: boolean ;
  referenceNumber?: Complaint | string;
  desiredOutcome: 'escalate' | 'corrective action' | "speak to HR" | 'other' ;
  otherOutcome?: string;
  preferredContactMethod: 'phone' | 'email';
  additionalInfo?: string;
  turnaroundTime: number ;//weeks - max(4) - in component
  status: Status | string;
  solution?: string //admin
}

