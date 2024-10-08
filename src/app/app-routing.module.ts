import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseEditorComponent } from './pages/exercise-editor/exercise-editor.component';

const routes: Routes = [
  // ... other routes
  { path: 'exercises/new', component: ExerciseEditorComponent },
  { path: 'exercises/edit/:id', component: ExerciseEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }