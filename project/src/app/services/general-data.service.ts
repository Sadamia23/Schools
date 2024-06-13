import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIBuilder } from '../../apiBuilder';
import { IGeneralData } from '../interfaces/general-data';

@Injectable({
  providedIn: 'root',
})
export class GeneralDataService {
  constructor(private _http: HttpClient) {}

  getGeneralData() {
    return this._http.get<IGeneralData>(APIBuilder.getGeneralData());
  }
}
