export interface CreditCard {
  id: string;
  alias: string;
  dueDate: string;
  invoiceClosingDate: string;
  limit: number;
  availableLimit?: number;
  flag: string;
  color: string;
  userId: string;
}
