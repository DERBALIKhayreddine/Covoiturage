import { Component, OnInit } from '@angular/core';
import { Ride } from '../models/carpooling';
import { MatDialog } from '@angular/material/dialog';
import { CarpoolingService } from '../services/carpooling.service';

@Component({
  selector: 'app-recherche-avancee',
  templateUrl: './recherche-avancee.component.html',
  styleUrls: ['./recherche-avancee.component.css']
})
export class RechercheAvanceeComponent implements OnInit {
  rides: Ride[] = [];
  selectedDeparture: string | undefined;
  selectedArrival: string | undefined;

  constructor(private service: CarpoolingService, public dialog: MatDialog) { }

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
      }
    );
  }
}
