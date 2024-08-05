import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task{
  id:number;
  title:string;
  description:string;
  status: 'Pending' | 'In Progress' | 'completed';
  priority: 'Low' | 'Medium' | 'High';
  dueDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>(this.tasks);


  getTasks(){
    return this.taskSubject.asObservable();
  }

  addTask(task:Task){
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    this.taskSubject.next(this.tasks);
  }
  

  constructor() { }
}
