import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegionsSchoolCount } from '../interfaces/regions-school-count';
import { APIBuilder } from '../../apiBuilder';

@Injectable({
  providedIn: 'root',
})
export class RegionsSchoolCountService {
  constructor(private _http: HttpClient) {}
  getRegionsSchoolCount() {
    return this._http.get<IRegionsSchoolCount[]>(
      APIBuilder.getRegionsSchoolCount()
    );
  }
}
