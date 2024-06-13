import { Component } from '@angular/core';
import { EducationInfoService } from '../../services/education-info.service';
import { DetailKey } from '../../interfaces/messages.model';

@Component({
  selector: 'app-education-information',
  templateUrl: './education-information.component.html',
  styleUrl: './education-information.component.scss',
})
export class EducationInformationComponent {
  GENERAL_EDUCATION_NATIONAL_GOALS: HTMLElement | null = null;
  NATIONAL_EDUCATIONAL_PLAN: HTMLElement | null = null;
  SCHOOLS_SELF_EVALUATION: HTMLElement | null = null;
  GEORGIAN_EDUCATION_SYSTEM: HTMLElement | null = null;
  STUDENTS_RIGHTS_AND_GUARANTEES: HTMLElement | null = null;

  titles!: DetailKey;
  isLoading = false;

  constructor(private _educationInfoService: EducationInfoService) {
    this.isLoading = true;
    this._educationInfoService.getEducationInfo().subscribe((data) => {
      this.GENERAL_EDUCATION_NATIONAL_GOALS = this.convertStringToHTMLElement(
        data[0].description
      );
      this.NATIONAL_EDUCATIONAL_PLAN = this.convertStringToHTMLElement(
        data[1].description
      );
      this.SCHOOLS_SELF_EVALUATION = this.convertStringToHTMLElement(
        data[2].description
      );
      this.GEORGIAN_EDUCATION_SYSTEM = this.convertStringToHTMLElement(
        data[3].description
      );
      this.STUDENTS_RIGHTS_AND_GUARANTEES = this.convertStringToHTMLElement(
        data[4].description
      );
    });

    this._educationInfoService
      .getEducationInfoTitles()
      .subscribe((data: any) => {
        this.titles = data.EDUCATIONIFO;
        this.isLoading = false;
      });
  }

  convertStringToHTMLElement(html: string): HTMLElement | null {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.firstElementChild as HTMLElement;
  }
}
