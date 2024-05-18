import { User } from "./user";

export interface Complaint {
  reporter: User | string;
  complaintID: string;
  complaintDate: string | Date;
  incidentDate: string | Date;
  category: 'service request' | 'product' | 'conflicts' | 'employee behavior' | 'other';
  urgency: "low" | "moderate" | "high" | "critical" | string;
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
  status: "new" | "open" | "in progress" | "closed" | "overdue";
  solution?: string //admin
}

