import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Tag } from "../../models/tag.model";

@Component({
  selector: "app-tag",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tag">
      <span class="tag-name">{{ tag.name }}</span>
      <button (click)="onTagClick()">×</button>
    </div>
  `,
  styles: [`

    .tag {
      background-color: #e0e0e0;
      padding: 0.25rem 0.5rem;
      border-radius: 16px;
      display: flex;
      align-items: center;
      font-size: 0.9rem;

      .tag-name {
        margin-right: 0.5rem;
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
        margin-left: 0.25rem;
        font-size: 1.2rem;
        line-height: 1;
        color: #666;
      }
    }
  `]
})
export class TagComponent {
  @Output() tagClick = new EventEmitter<Tag>();
  @Input() tag!: Tag;
  onTagClick() {
    this.tagClick.emit(this.tag);
  }
}
