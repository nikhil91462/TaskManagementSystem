import { Component, EventEmitter, Output } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { Router } from '@angular/router';
// import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  tasks:Task[] = [];
  // TaskList: any;
  statusFilter:string = '';
  sortOrder:'asc' | 'desc' = 'asc';
  selectedRows:any = [];

  @Output() eventName = new EventEmitter();

  

  TaskList = [{
    title: 'task1', status: 'Pending' , priority: 'Low',dueDate:'2026-10-20', checked:false,
  },
  {
    title: 'task2', status: 'Pending' , priority: 'High',dueDate:'2026-10-20', checked:false,
  },
  {
    title: 'task3', status: 'Pending' , priority: 'Low',dueDate:'2026-10-20', checked:false,
  },
  {
    title: 'task4', status: 'Pending' , priority: 'Low',dueDate:'2026-10-20', checked:false,
  },]

  constructor(private taskService : TaskService, private router:Router){

  }

  ngOnInit():void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    if (history.state.Task) {
      this.TaskList = history.state.Task;
      
    }
  }

  // checkTheCheckbox(item:any, i:any){
  //   if (item.checked) {
  //     this.selectedRows.push(item);
  //   }else{
  //     this.selectedRows.splice(i,1);
  //   }
  // }

  showDetails() {
    this.router.navigate(['/task-detail'], { state: { Task: this.TaskList } });
  }

   filteredTasks():Task[]{
    return this.tasks.filter(task => this.statusFilter === '' || task.status === this.statusFilter);
   }
}
