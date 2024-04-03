import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Ride } from '../models/carpooling';

@Component({
  selector: 'app-ridedialog',
  templateUrl: './ridedialog.component.html',
  styleUrls: ['./ridedialog.component.css']
})
export class RidedialogComponent {
  displayedColumns: string[] = ['driver', 'departureLocation', 'destinationLocation', 'departureTime'];
  dataSource: MatTableDataSource<Ride>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Ride[]) {
    this.dataSource = new MatTableDataSource<Ride>(data);
    console.log(data);

  }
}
