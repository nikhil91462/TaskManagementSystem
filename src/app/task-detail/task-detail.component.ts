import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  selectedTask: any;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {

  }

  // ngOnInit(): void {
  //   const nav = this.router.getCurrentNavigation();
  //   console.log(nav, 'Navigation Object');
  //   console.log(nav?.extras.state, 'State Object');
  //   if (nav?.extras.state) {
  //     this.selectedTask = nav.extras.state['Task'];
  //   }
  // }
  ngOnInit(): void {
    console.log(history.state.Task,"history.state.Task");
    
    this.selectedTask = history.state.Task;
    // this.selectedTask.forEach((item:any) => {
    //   item.dueDate = new Date(ite)
    // });
  }

  addRow() {
    this.selectedTask.push({});
  }


  DeleteRow(i:any){
    this.selectedTask.splice(i,1);
  }

  saveDetails() {
    this.router.navigate(['/task-list'], { state: { Task: this.selectedTask } });
  }

  TaskList = [{
    title: 'task1', status: 'Pending', priority: 'Low', dueDate: '10-10-2026', checked: false,
  },
  {
    title: 'task2', status: 'Pending', priority: 'High', dueDate: '10-10-2026', checked: false,
  },
  {
    title: 'task3', status: 'Pending', priority: 'Low', dueDate: '10-10-2026', checked: false,
  },
  {
    title: 'task4', status: 'Pending', priority: 'Low', dueDate: '10-10-2026', checked: false,
  },]


}
