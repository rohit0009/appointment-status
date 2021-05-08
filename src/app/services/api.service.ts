import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  base = `https://cdn-api.co-vin.in/api/`;
  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get(`${this.base}v2/admin/location/states`);
  }

  calendarByDistrictPuneToday(): Observable<any> {
    let d = new Date();

    return this.http.get(
      `${
        this.base
      }v2/appointment/sessions/public/calendarByDistrict?district_id=363&date=${d.getDate()}-${d.getMonth() +
        1}-${d.getFullYear()}`
    );
  }
}
