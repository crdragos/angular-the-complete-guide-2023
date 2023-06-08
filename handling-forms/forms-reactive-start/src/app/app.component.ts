import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders: string[] = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames: string[] = ['Chris', 'Anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isValidUsername.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.isForbiddenEmail),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
    // this.signUpForm.valueChanges.subscribe((value) => console.log(value));
    this.signUpForm.statusChanges.subscribe((value) => console.log(value));
    this.signUpForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signUpForm.patchValue({
      'userData': {
        'username': 'Anna'
      }
    });
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  onSubmit(): void {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  isValidUsername(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) >= 0) {
      return {forbidden: true};
    }
    return null;
  }

  isForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
