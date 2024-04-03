import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarpoolingService } from 'src/app/services/carpooling.service';
import { Ride } from 'src/app/models/carpooling';
import { RidedialogComponent } from 'src/app/ridedialog/ridedialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rides: Ride[] = [];
  selectedDeparture: string | undefined;
  selectedArrival: string | undefined;
  selectedDate: Date | undefined;

  constructor(private service: CarpoolingService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllRides();
  }

  getAllRides(): void {
    this.service.getAllRides().subscribe(
      (res: any) => {
        this.rides = res.rides;
      },
      (error: any) => {
        console.error('Error fetching rides:', error);
        // Handle error gracefully, e.g., show a message to the user
      }
    );
  }



}
