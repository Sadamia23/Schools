import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDetails } from '../interfaces/details.model';
import { APIBuilder } from '../../apiBuilder';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private _http: HttpClient) {}

  getDetailsByKey(key: string) {
    return this._http.get<IDetails>(APIBuilder.getEducationInfoDetails(key));
  }
}
