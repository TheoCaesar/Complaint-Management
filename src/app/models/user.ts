export interface User {
  staffId:number | string;
  name: {
    firstname:string;
    otherNames: string | null;
    lastname: string;
  };
  gender: 'M' | 'F';
  dob: string | Date;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  jobTitle: string;
  department: "IT" | "Sales" | "Operations"  | "Compliance" | string;
  staffType: "contract" | "full time" | "intern" | "nsp" | string;
  employmentStatus: 'active' | 'inactive' | 'terminated';
  salary: number;
  startDate: string | Date;
  endDate: string | Date | null;
}
