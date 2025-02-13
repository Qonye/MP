export interface Booking {
  booking_id: string;
  user_id: string;
  event_id: string;
  date: string;
  num_participants: number;
  total_price: number;
  payment_status: string;
}
