import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HomeService } from './home.service';
import { ProgramListComponent } from '../../components/program-list/program-list.component';
import { ProgramService } from '../../services/program.service';
import { Program } from '../../models/models';
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
    constructor(private programService: ProgramService) {}
    programs$ = this.programService.programs$;
}
