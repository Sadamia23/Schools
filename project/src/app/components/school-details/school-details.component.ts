import { Component } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { ISchoolDetails } from '../../interfaces/school-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrl: './school-details.component.scss',
})
export class SchoolDetailsComponent {
  schoolDetails!: ISchoolDetails;
  constructor(
    public resultService: ResultService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => {
      resultService.schoolId = param['id'];
    });

    this.resultService
      .getSchoolDetails(resultService.schoolId)
      .subscribe((data) => {
        this.schoolDetails = data;
      });
  }
}
