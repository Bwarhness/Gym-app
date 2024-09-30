import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session } from '../../models/models';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session.component.html',
  styles: [
    `
      :host {
        display: block;
      }
      .sets {
        display: flex;
        gap: 0.5rem;

      }
      .set {
        border-radius: 100%;
        aspect-ratio: 1/1;
        width: 3rem;
        display: flex;
        place-content: center;
        place-items: center;
        background-color: red;
      }
    `,
  ],
})
export class SessionComponent {
  exercises$ = this.sessionService.getExercises();

  constructor(private sessionService: SessionService) {}
}