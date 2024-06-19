import { Component, Input, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { ISchool } from '../../interfaces/school.model';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss',
})
export class SchoolsComponent implements OnInit {
  data: ISchool[] = [];
  currentElements: ISchool[] = [];
  filteredElementsByDistricts: ISchool[] = [];
  showMore: boolean = true;
  totalSchools: number = 0;
  totalItems: number = 0;
  isLoading: boolean = false;
  // @Input() school!: ISchool;
  constructor(private _resultService: ResultService, private _router: Router) {}
  ngOnInit(): void {
    if (this._resultService.navigatedFromFilter) {
      this.filterElements();
    } else {
      this.loadAllSchools();
    }
  }

  async loadAllSchoolsInRegion(pages: number): Promise<void> {
    const promises = [];

    for (let i = 1; i <= pages; i++) {
      const promise = firstValueFrom(
        this._resultService.getResultsFromAPI(this._resultService.id, i)
      )
        .then((data) => {
          if (data && data.result) {
            this.data = this.data.concat(data.result);
          }
        })
        .catch((error) => {
          console.error(`Error loading page ${i}:`, error);
        });
      promises.push(promise);
    }

    await Promise.all(promises);
  }

  async filterElements() {
    try {
      this.isLoading = true;
      let totalItems = this._resultService.schoolsResult.totalItems;
      let pages = Math.ceil(totalItems / 24);
      this.currentElements = [];

      await this.loadAllSchoolsInRegion(pages);

      if (this._resultService.showOnlyPublic) {
        this.filteredElementsByDistricts = this.data.filter(
          (item) =>
            this._resultService.selectedDistricts.includes(item.districtName) &&
            item.schoolType === 'PUBLIC'
        );
      } else {
        this.filteredElementsByDistricts = this.data.filter((item) =>
          this._resultService.selectedDistricts.includes(item.districtName)
        );
      }

      this.totalSchools = this.filteredElementsByDistricts.length;

      this.currentElements = this.currentElements.concat(
        this.filteredElementsByDistricts.slice(0, 24)
      );
      this.isLoading = false;
      this._resultService.navigatedFromFilter = false;
    } catch (error) {
      console.error('Error Loading elements', error);
    }
  }

  async loadAllSchools() {
    try {
      this.isLoading = true;

      this.currentElements = [];

      const data = await firstValueFrom(this._resultService.loadAllSchools());

      this.totalSchools = data.totalItems;
      this.currentElements = data.result;
    } catch (error) {
      console.error('Error Loading Data', error);
    } finally {
      this.isLoading = false;
    }
  }

  async loadAllElements(): Promise<void> {
    const promises = [];

    const promise = firstValueFrom(this._resultService.loadAllSchools())
      .then((data) => {
        if (data && data.result) {
          this.data = this.data.concat(data.result);
        }
      })
      .catch((error) => {
        console.error(`Error loading:`, error);
      });
    promises.push(promise);

    await Promise.all(promises);
  }
  loadMore() {
    const nextSlice = this.filteredElementsByDistricts.slice(
      this.currentElements.length,
      this.currentElements.length + 24
    );

    this.currentElements.push(...nextSlice);

    this.showMore =
      this.currentElements.length < this.filteredElementsByDistricts.length;
  }
  showFullDetails(id: number) {
    this._resultService.schoolId = id;
    this._router.navigate([`/schools/${id}`]);
  }
}
