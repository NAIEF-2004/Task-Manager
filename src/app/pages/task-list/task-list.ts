import { filter } from 'rxjs/internal/operators/filter';
import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../../service/task-service';
import { RouterLink, RouterLinkWithHref,RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList
{
  tasklist=inject(TaskService);
  filter=signal<'all' | 'active' | 'completed'>('all');
  filteredTasks=computed(()=>{
    switch(this.filter()){
      case 'active':
        return this.tasklist.activeTasks();
      case 'completed':
        return this.tasklist.completedTasks();
      default:
        return this.tasklist.tasks();
    }
  });
setFilter(filter:'all' | 'active' | 'completed'){
  this.filter.set(filter);
}
  constructor(){
    console.log(this.tasklist.activeTasks());
    console.log(this.tasklist.completedTasks());
  }
}
