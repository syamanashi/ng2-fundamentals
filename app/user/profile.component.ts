import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'
import { ToastrService } from '../common/toastr.service'

@Component({
  templateUrl: './app/user/profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup

  constructor(
    private authService:AuthService,
    private router:Router,
    private toastr:ToastrService
    ) {

  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.toastr.success(formValues.firstName + ' ' + formValues.lastName + ' was successfully updated!');
    this.router.navigate(['events'])
  }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName)
    let lastName = new FormControl(this.authService.currentUser.lastName)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

}