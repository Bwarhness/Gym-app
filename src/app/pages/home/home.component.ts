import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HomeService } from './home.service';
import { ProgramListComponent } from '../../components/program-list/program-list.component';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        ProgramListComponent
    ],
    template: `
    <app-program-list [programs]="programs$()"></app-program-list>
    `,
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    constructor(public homeService:HomeService) {}
    programs$ = this.homeService.programs$;
 }
