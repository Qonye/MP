export interface Event {
  event_id: string;
  vendor_id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  difficulty: string;
  price: number;
  max_participants: number;
  image: string;
  itinerary: string;
  what_to_bring: string;
  included_excluded: string;
  safety_info: string;
  promoted: boolean;
}
