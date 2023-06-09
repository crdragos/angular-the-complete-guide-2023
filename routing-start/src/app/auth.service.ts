import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  loggedIn: boolean = false;

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 800)
    });
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
