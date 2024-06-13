import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsComponent } from './components/schools/schools.component';
import { HomeComponent } from './components/home/home.component';
import { GeneralEducationComponent } from './components/general-education/general-education.component';
import { LegislationComponent } from './components/legislation/legislation.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'სკოლების პორტალი',
  },
  {
    path: 'schools',
    component: SchoolsComponent,
    title: 'სკოლები',
  },
  {
    path: 'general-education',
    component: GeneralEducationComponent,
    title: 'ზოგადი განათლება',
  },
  {
    path: 'legislation',
    component: LegislationComponent,
    title: 'კანონმდებლობა',
  },
  {
    path: '**',
    redirectTo: 'home',
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}