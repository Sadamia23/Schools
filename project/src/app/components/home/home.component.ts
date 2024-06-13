import { Component } from '@angular/core';
import { GeneralDataService } from '../../services/general-data.service';
import { IGeneralData } from '../../interfaces/general-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data!: IGeneralData;
  constructor(private _generalDataService: GeneralDataService) {
    this._generalDataService.getGeneralData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
}
