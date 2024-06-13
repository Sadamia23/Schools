import { Component } from '@angular/core';
import { RegionsSchoolCountService } from '../../services/regions-school-count.service';
import { IRegionsSchoolCount } from '../../interfaces/regions-school-count';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  isVisible = false;
  regionsSchoolCount: IRegionsSchoolCount[] = [];
  regionID: number = 0;

  constructor(private _RegionsSchoolCountService: RegionsSchoolCountService) {
    this._RegionsSchoolCountService
      .getRegionsSchoolCount()
      .subscribe((data) => {
        this.regionsSchoolCount = data;
        console.log(data);
      });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }



  getRegionID(event: MouseEvent) {
    const element = event.target as HTMLElement;
    const regionIDAttribute = element.getAttribute('regionID');

    if (regionIDAttribute) {
      this.regionID = parseInt(regionIDAttribute, 10) || 0;
      this.showModal()
    } else {
      this.regionID = 0;
    }
  }
}
