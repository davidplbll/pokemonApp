import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileHeaderComponent,UserDialog} from './profile-header.component'
import {ProfileHeaderRouterModule} from './profile-header.routing.module'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ProfileHeaderComponent,UserDialog],
  imports: [
    CommonModule,
    MatDialogModule,
    ProfileHeaderRouterModule,
    MatButtonModule
  ],
  exports:[ProfileHeaderComponent],
  entryComponents:[UserDialog]
})
export class ProfileHeaderModule { }
