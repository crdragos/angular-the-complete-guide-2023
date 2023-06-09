import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  public defaultQuestion: string = 'pet';
  public answer: string;
  public genders: string[] = ['male', 'female'];
  public submitted: boolean = false;
  public user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  /// assigment variables
  @ViewChild('assigmentForm') assignmentForm: NgForm;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription: string = 'Advanced';
  assignmentUser = {email: '', subscription: '', password: ''};

  suggestUserName() {
    const suggestedName = 'Superuser';
    // setValue is used for the whole form
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    // pathValue is used for a certain value from the form
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.submitted = true;
    this.signUpForm.reset();
  }

  onSubmitAssignmentForm(): void {
    this.assignmentUser.email = this.assignmentForm.value.email;
    this.assignmentUser.subscription = this.assignmentForm.value.subscription;
    this.assignmentUser.password = this.assignmentForm.value.password;
    console.log('[email: ' + this.assignmentUser.email + ' | subscription: ' + this.assignmentUser.subscription + ' | password: ' + this.assignmentUser.password + ']')
    this.assignmentForm.reset();
  }
}
