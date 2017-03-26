import { Injectable } from '@angular/core'

import { IUser } from './user.model'

@Injectable()
export class AuthService {
  currentUser: IUser

  loginUser(userName: string, password: string) {
    // When we call loginUser, we should make a call to the server to authenticate the user and log the user in... and then set the user property.
    // But, for now, we're going to fake the implementation:
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa',
    }
  }

  isAuthenticated() {
    return !!this.currentUser
  }
}