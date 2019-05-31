import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'education', component: EducationComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
