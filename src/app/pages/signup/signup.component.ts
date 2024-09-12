import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  standalone: true,
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
      // Here you would typically call a service to handle the signup process
    }
  }

  getButtonTooltip(): string {
    if (this.signupForm.valid) {
      return 'Click to sign up';
    }

    const invalidControls = [];
    if (this.signupForm.get('username')?.invalid) invalidControls.push('Username');
    if (this.signupForm.get('email')?.invalid) invalidControls.push('Email');
    if (this.signupForm.get('password')?.invalid) invalidControls.push('Password');

    return `Please fill in valid: ${invalidControls.join(', ')}`;
  }
}