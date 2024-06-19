import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralEducationComponent } from './components/general-education/general-education.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { EducationInformationComponent } from './components/education-information/education-information.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MapComponent } from './components/map/map.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DetailsComponent } from './components/details/details.component';
import { SidebarModule } from 'primeng/sidebar';
import { FilterComponent } from './components/filter/filter.component';
import { ListboxModule } from 'primeng/listbox';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DetailedFilterComponent } from './components/detailed-filter/detailed-filter.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    GeneralEducationComponent,
    SchoolsComponent,
    HomeComponent,
    EducationInformationComponent,
    MapComponent,
    DetailsComponent,
    FilterComponent,
    DetailedFilterComponent,
    SchoolDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ListboxModule,
    ReactiveFormsModule,
    NzSelectModule,
    HttpClientModule,
    ProgressSpinnerModule,
    FormsModule,
    NzModalModule,
    SidebarModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
