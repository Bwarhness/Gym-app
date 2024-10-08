import { Component, Input, Output, EventEmitter, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Exercise } from '../../models/exercise.model';
import { ExerciseListItemComponent } from '../exercise-list-item/exercise-list-item.component';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ExerciseListItemComponent],
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {
  @Input({ required: true }) set exercises(value: Exercise[]) {
    this._exercises.set(value);
  }
  @Output() exerciseSelected = new EventEmitter<Exercise>();
  
  private _exercises = signal<Exercise[]>([]);
  tagChips = signal<Tag[]>([]);
  searchTerm = signal<string>('');

  filteredExercises = computed(() => {
    const tags = this.tagChips();
    const term = this.searchTerm().toLowerCase();
    return this._exercises().filter(exercise =>
      (tags.length === 0 || tags.every(tag => exercise.tags.some(t => t.id === tag.id))) &&
      (term === '' || 
       exercise.name.toLowerCase().includes(term) ||
       exercise.description.toLowerCase().includes(term) ||
       exercise.tags.some(tag => tag.name.toLowerCase().includes(term)))
    );
  });

  addTagChip(tag: Tag): void {
    this.tagChips.update(tags => {
      if (!tags.some(t => t.id === tag.id)) {
        return [...tags, tag];
      }
      return tags;
    });
  }

  removeChip(tag: Tag): void {
    this.tagChips.update(tags => tags.filter(t => t.id !== tag.id));
  }

  updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  onExerciseClick(exercise: Exercise): void {
    this.exerciseSelected.emit(exercise);
  }
}