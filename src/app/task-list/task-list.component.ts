import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
// import { TableModule } from 'primeng/table';

interface Task {
  id?: number;
  title: string;
  status: string;
  priority: string;
  dueDate: string;
  description?: string;
  checked: boolean;
}


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
    title: 'task2', status: 'In Progress' , priority: 'High',dueDate:'2026-10-20', checked:false,
  },
  {
    title: 'task3', status: 'In Progress' , priority: 'Low',dueDate:'2026-10-20', checked:false,
  },
  {
    title: 'task4', status: 'Done' , priority: 'Low',dueDate:'2026-10-20', checked:false,
  },]

  

  constructor(private taskService : TaskService, private router:Router){

  }

  ngOnInit():void{
    // this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.filterTasks();
    if (history.state.Task) {
      this.TaskList = history.state.Task;
      this.filteredTaskList = history.state.Task;
      
    }
  }


  showDetails() {
    // this.router.navigate(['/task-detail'], { state: { Task: this.TaskList } });
    this.router.navigate(['/task-detail'], { state: { Task: this.filteredTaskList } });
  }

  filteredTaskList: Task[] = [];
  dueDateFilter: string = '';

  filterTasks() {
    let filteredList = this.TaskList;

    if (this.statusFilter !== '') {
      filteredList = filteredList.filter(task => task.status == this.statusFilter);
    }

    if (this.dueDateFilter !== '') {
      filteredList = filteredList.filter(task => new Date(task.dueDate) <= new Date(this.dueDateFilter));
    }

    this.filteredTaskList = filteredList;
  }

  

  
}
