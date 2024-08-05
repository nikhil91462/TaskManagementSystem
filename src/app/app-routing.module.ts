import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  
  { path: '',component: TaskListComponent},
  { path: 'task-list',component: TaskListComponent },
  { path: 'task-detail',component: TaskDetailComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
