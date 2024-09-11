import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HomeService } from './home.service';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule
    ],
    template: `
@for (program of programs$(); track program) {

   <mat-card class="example-card" appearance="outlined"  >
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>{{program.name}}</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card> 
}
    `,
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    constructor(public homeService:HomeService) {}
    programs$ = this.homeService.programs$;
 }
