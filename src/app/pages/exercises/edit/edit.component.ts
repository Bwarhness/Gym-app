import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { mockTags } from '../../../../models/tags';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  exerciseForm: FormGroup;
  availableTags = mockTags;

  constructor(private fb: FormBuilder) {
    this.exerciseForm = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      tags: [[]]
    });
  }

  removeTag(tagToRemove: any) {
    const currentTags = this.exerciseForm.get('tags')?.value || [];
    const updatedTags = currentTags.filter((tag: any) => tag.id !== tagToRemove.id);
    this.exerciseForm.patchValue({ tags: updatedTags });
  }

  onSubmit() {
    if (this.exerciseForm.valid) {
      console.log(this.exerciseForm.value);
    }
  }
}
