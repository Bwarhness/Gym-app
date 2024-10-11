import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  forwardRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { Tag } from "../../models/tag.model";
import { TagComponent } from "../tag/tag.component";

@Component({
  selector: "app-tags",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TagComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (tags.length > 0) {
      <div class="tags">
        @for (tag of tags; track tag.id) {
          <app-tag [tag]="tag" (tagClick)="onTagClick($event)"></app-tag>
        }
      </div>
    } @else {
      <p>No tags found.</p>
    }
  `,
  styles: [
    `
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsComponent),
      multi: true,
    },
  ],
})
export class TagsComponent implements ControlValueAccessor {
  @Output() tagClick: EventEmitter<Tag> = new EventEmitter<Tag>();
  @Input() tags: Tag[] = [];

  onChange: (value: Tag[]) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: Tag[]): void {
    if (value !== undefined) {
      this.tags = value;
    }
  }

  registerOnChange(fn: (value: Tag[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onTagClick(tag: Tag): void {
    this.tagClick.emit(tag);
    this.onTouched();
    // Assuming clicking a tag toggles its selection
    const index = this.tags.findIndex(t => t.id === tag.id);
    if (index > -1) {
      this.tags.splice(index, 1);
    } else {
      this.tags.push(tag);
    }
    this.onChange(this.tags);
  }
}
