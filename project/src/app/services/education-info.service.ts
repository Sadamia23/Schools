import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEducationInfo } from '../interfaces/education-info';
import { APIBuilder } from '../../apiBuilder';

@Injectable({
  providedIn: 'root',
})
export class EducationInfoService {
  constructor(private _http: HttpClient) {}
  getEducationInfo() {
    return this._http.get<IEducationInfo[]>(APIBuilder.getEducationInfo());
  }

  getEducationInfoTitles() {
    return this._http.get(APIBuilder.getEducationInfoTitles());
  }
}
