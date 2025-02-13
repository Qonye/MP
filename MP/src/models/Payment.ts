export interface Payment {
  payment_id: string;
  vendor_id: string;
  booking_id: string;
  amount: number;
  status: string;
  date: string;
}
