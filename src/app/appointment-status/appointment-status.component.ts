import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-appointment-status',
  templateUrl: './appointment-status.component.html',
  styleUrls: ['./appointment-status.component.scss']
})
export class AppointmentStatusComponent implements OnInit {
  selectedInterval: number = null;
  isStarted = false;
  subscription: Subscription = null;
  constructor(private apiService: ApiService) {}

  intervals: any[] = [
    { value: 60000, viewValue: '1 min' },
    { value: 300000, viewValue: '5 min' }
  ];

  intervalSelectionDone(e) {
    console.log(e);
  }

  toggleScan(e) {
    if (e == 'start') {
      this.isStarted = true;
      this.subscription = this.apiService
        .calendarByDistrictPuneToday()
        .subscribe(data => {
          console.log(data);
        });
    } else {
      this.isStarted = false;
      this.subscription != null
        ? this.subscription.unsubscribe()
        : console.log('Not subscriber');
    }
  }

  ngOnInit() {}
}
