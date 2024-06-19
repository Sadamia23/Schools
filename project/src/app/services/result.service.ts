import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISchoolRoot } from '../interfaces/school.model';
import { ISchoolDetails } from '../interfaces/school-details';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  schoolsResult!: ISchoolRoot;
  showOnlyPublic: boolean = false;
  showOnlyPrivate: boolean = false;
  selectedDistricts: string[] = [];
  navigatedFromFilter: boolean = false;
  schoolId: number = 0;

  id!: number;
  constructor(private _http: HttpClient) {}
  getResultsFromAPI(regionID: number, i: number = 1) {
    const targetUrl = `https://skolebi.emis.ge/back/school/search?page=${i}&size=24&regions=${regionID}`;
    const encodedTargetUrl = encodeURIComponent(targetUrl);
    const proxyUrl = `http://localhost:3000/proxy?targetUrl=${encodedTargetUrl}`;
    return this._http.get<ISchoolRoot>(proxyUrl);
  }
  setResults(result: ISchoolRoot) {
    this.schoolsResult = result;
  }
  toggleOnlyPublicButton() {
    this.showOnlyPrivate = false
    this.showOnlyPublic = !this.showOnlyPublic;
  }
  toggleOnlyPrivateButton(){
    this.showOnlyPublic = false;
    this.showOnlyPrivate = !this.showOnlyPrivate
  }
  loadAllSchools(i: number = 1){
    const targetUrl = `https://skolebi.emis.ge/back/school/search?page=1&size=24&regions=1009`;
    const encodedTargetUrl = encodeURIComponent(targetUrl);
    const proxyUrl = `http://localhost:3000/proxy?targetUrl=${encodedTargetUrl}`;
    return this._http.get<ISchoolRoot>(proxyUrl);
  }

  getSchoolDetails(id: number){
    const targetUrl = `https://skolebi.emis.ge/back/school/search/${id}`;
    const encodedTargetUrl = encodeURIComponent(targetUrl);
    const proxyUrl = `http://localhost:3000/proxy?targetUrl=${encodedTargetUrl}`;
    return this._http.get<ISchoolDetails>(proxyUrl);
  }
}
