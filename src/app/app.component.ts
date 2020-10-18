import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement', { static: false}) signupForm: NgForm;
  genders = ['male', 'female'];
  user = {
    username: '',
    email:'',
    secretQuestion:'',
    gender: ''
  }
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({   // populates the value of form
      userData: { 
        username: suggestedName,
        email:''
      },
      secretQuestion: 'pet',
      gender:'male'
    });

    // patchvalue is used for setting a partiular form field
    // this.signupForm.form.patchValue({
    //   userData: {
    //     username:'David'
    //   }
    // })
  
  }

  // onSubmit(form: NgForm) {
  //    console.log('asa',form);
  // }


  onSubmit() {
    this.submitted = true; 
     this.user.username = this.signupForm.value.userData.username;
     this.user.email = this.signupForm.value.userData.email;
     this.user.secretQuestion = this.signupForm.value.secretQuestion;
     this.user.gender = this.signupForm.value.gender;

     this.signupForm.reset();
  }

}
