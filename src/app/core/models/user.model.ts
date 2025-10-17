export interface User {
  id: string;
  fullName: {
    value: string;
  };
  email: string;
  documentType: string;
  identificationNumber: string;
  phoneNumber: string | null;
  address: string | null;
  invoices: any[];
  isActive: boolean;
  status: string;

}