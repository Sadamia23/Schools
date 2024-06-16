import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGeneralEducatinoData } from '../interfaces/general-education-data';
import { APIBuilder } from '../../apiBuilder';

@Injectable({
  providedIn: 'root',
})
export class GeneralEducationDataService {
  constructor(private _http: HttpClient) {}
  getGeneralEducationData() {
    const targetUrl = APIBuilder.getGeneralEducationData();
    const encodedTargetUrl = encodeURIComponent(targetUrl);
    const proxyUrl = `http://localhost:3000/proxy?targetUrl=${encodedTargetUrl}`;
    return this._http.get<IGeneralEducatinoData>(proxyUrl);
  }
}
