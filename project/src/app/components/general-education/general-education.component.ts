import { Component } from '@angular/core';
import { GeneralEducationDataService } from '../../services/general-education-data.service';
import { IGeneralEducatinoData } from '../../interfaces/general-education-data';

@Component({
  selector: 'app-general-education',
  templateUrl: './general-education.component.html',
  styleUrl: './general-education.component.scss',
})
export class GeneralEducationComponent {
  id!: number;
  sidebarVisible: boolean = false;
  data!: IGeneralEducatinoData;
  constructor(
    private _generalEducationDataService: GeneralEducationDataService
  ) {
    this._generalEducationDataService
      .getGeneralEducationData()
      .subscribe((data) => {
        this.data = data;
      });
  }

  showSidebar(id: number) {
    this.id = id;
    this.sidebarVisible = true;
  }

  getResultById(id: number) {
    return this.data.result.find((item) => item.id === id);
  }
}
