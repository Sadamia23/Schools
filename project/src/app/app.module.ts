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
import { LegislationComponent } from './components/legislation/legislation.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationInformationComponent } from './components/education-information/education-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    GeneralEducationComponent,
    SchoolsComponent,
    LegislationComponent,
    HomeComponent,
    EducationInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
