import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDeleteConfirmationComponent } from './task-delete-confirmation/task-delete-confirmation.component';
import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
// import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
// import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskFormComponent,
    TaskDeleteConfirmationComponent,
    ButtonComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // TableModule,
    FormsModule,
    // DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
