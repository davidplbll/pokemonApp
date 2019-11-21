import { NgModule } from '@angular/core';
import { ProfileHeaderComponent } from './profile-header.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:ProfileHeaderComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProfileHeaderRouterModule { }
