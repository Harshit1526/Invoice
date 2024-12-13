export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  amount: number;
  description: string;
  status: 'paid' | 'pending' | 'overdue';
  clientName: string;
  clientEmail: string;
  createdAt: string;
  updatedAt: string;
}