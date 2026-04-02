import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService } from '../../service/task-service';


@Component({
  selector: 'app-task-details',
  imports: [RouterLink],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails
{

taskId=signal<number|null>(null);
route=inject(ActivatedRoute);
taskService=inject(TaskService);
task=computed(()=>{
  const id =this.taskId();
  if(!id){
    return undefined;
  }
  return this.taskService.taskGet(id);
});

  constructor() {
 const id=this.route.snapshot.paramMap.get('id');
 if(id)
  {
    this.taskId.set(Number(id));
  }
  }
}
