import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../models/exercise.model';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-exercise-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-list-item.component.html',
  styleUrls: ['./exercise-list-item.component.scss']
})
export class ExerciseListItemComponent {
  @Input({ required: true }) exercise!: Exercise;
  @Output() tagClick = new EventEmitter<Tag>();
  @Output() exerciseClick = new EventEmitter<Exercise>();

  onExerciseClick(): void {
    this.exerciseClick.emit(this.exercise);
  }

  onTagClick(tag: Tag, event: Event): void {
    event.stopPropagation(); // Prevent the exercise item click event
    this.tagClick.emit(tag);
  }

  getImageUrl(): string {
    return this.exercise.image || 'assets/placeholder-image.jpg';
  }
}