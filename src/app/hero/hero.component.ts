import { Component, OnInit } from '@angular/core';
import { Ride } from '../models/carpooling';
import { CarpoolingService } from '../services/carpooling.service';
import { MatDialog } from '@angular/material/dialog';
import { RidedialogComponent } from '../ridedialog/ridedialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  rides: Ride[] = [];
  selectedDeparture: string | undefined;
  selectedArrival: string | undefined;
  selectedDate: Date | undefined = new Date(); // Initialize selectedDate

  constructor(private service: CarpoolingService, public dialog: MatDialog ,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllRides();
  }

  getAllRides(): void {
    this.service.getAllRides().subscribe(
      (res) => {
        this.rides = res as Ride[];
      },
      (error: any) => {
        console.error('Error fetching rides:', error);
        // Handle error gracefully, e.g., show a message to the user
      }
    );
  }

  search(): void {
    console.log('Search button clicked');
    console.log('Selected departure:', this.selectedDeparture);
    console.log('Selected arrival:', this.selectedArrival);
    console.log('Selected date:', this.selectedDate);

    if (this.selectedDeparture && this.selectedArrival) {
      console.log('Searching...');
      this.toastr.info("En train de rechercher")

      const filteredRides = this.rides.filter(ride => {
        return ride.departureLocation === this.selectedDeparture &&
               ride.destinationLocation === this.selectedArrival;
      });

      console.log('Filtered rides:', filteredRides);

      // Open dialog with filtered rides
      this.dialog.open(RidedialogComponent, {
        width: '800px',
        data: filteredRides
      });
    } else {
      console.log('Please select departure and arrival.');
      this.toastr.info("choisir lien de depart et lien d'arriver")
    }
  }





}

