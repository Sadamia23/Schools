import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/contact.model';
import { APIBuilder } from '../../apiBuilder';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _http: HttpClient) {}

  getContacts() {
    return this._http.get<IContact>(APIBuilder.getContacts());
  }
}
