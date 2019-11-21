import { Component, OnInit,Inject } from '@angular/core';
import { AuthFbService} from './../../services'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.sass']
})
export class ProfileHeaderComponent implements OnInit {

  user
  viewImage
  constructor(public fb:AuthFbService,public dialog: MatDialog) { }
  

  ngOnInit() {  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialog, {
      width: '200px',
      data: this.fb.user
    });
  }
}

@Component({
  selector: 'modal-profile',
  templateUrl: 'modal-profile-header.component.html',
  styleUrls: ['./profile-header.component.sass']

})

export class UserDialog {

  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public user,private fb:AuthFbService,private router:Router) {
 console.log("user ", user);

    }

  

  cerrarsesion(){
    this.fb.logout()
    this.dialogRef.close();
  }

  gotoFavorite(){
    this.router.navigateByUrl("favorite")
  }

}
