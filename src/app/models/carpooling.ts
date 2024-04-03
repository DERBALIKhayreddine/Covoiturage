

export interface Ride {
  id: string;
  driver: string;
  drivernumber: string;
  car: string;
  availableSeats: number;
  departureLocation: string;
  destinationLocation: string;
  departureTime: Date;
  // Additional ride properties can be added here
}

interface Booking {
  id: number;
  passenger: string;
  ride: Ride;
  // Additional booking properties can be added here
}



