import { Component } from '@angular/core';
import { IDetails } from '../../interfaces/details.model';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../../services/details.service';
import { EducationInfoService } from '../../services/education-info.service';
import { DetailKey } from '../../interfaces/messages.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  details!: IDetails;
  Key!: string;
  titles!: DetailKey;

  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private _detailsService: DetailsService,
    private _educationInfoService: EducationInfoService
  ) {
    this.isLoading = true;
    this.route.params.subscribe((param) => {
      this.Key = param['key'];
    });

    this._detailsService.getDetailsByKey(this.Key).subscribe((data) => {
      this.details = data;
    });

    this._educationInfoService
      .getEducationInfoTitles()
      .subscribe((data: any) => {
        this.titles = data['DETAIL-KEY'];
        this.isLoading = false;
      });
  }
}
