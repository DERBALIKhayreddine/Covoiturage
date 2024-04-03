

export interface Ride {
  id: string;
  driver: string;
  drivernumber: string;
  imagedriver:string
  car: string;
  carImg:string;
  availableSeats: number;
  departureLocation: string;
  destinationLocation: string;
  departureTime: Date;
  climatisation:boolean;
  Gender:string;
  bagage:boolean;
  smoker:boolean;

  // Additional ride properties can be added here
}

interface Booking {
  id: number;
  passenger: string;
  ride: Ride;
  // Additional booking properties can be added here
}



