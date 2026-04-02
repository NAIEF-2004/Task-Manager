import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../../service/task-service';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
})
export class TaskForm
{
  router=inject(Router);
  serves=inject(TaskService);
  private fb=inject(FormBuilder);
  taskForm=this.fb.group({
  title:['',[Validators.required,Validators.minLength(3)]],
  description:['',Validators.required]
  });
  onSubmit() {

    if(this.taskForm.valid){
      console.log(this.taskForm.value);
      if(this.taskForm.value.title && this.taskForm.value.description){
      this.serves.addTsk(this.taskForm.value.title,this.taskForm.value.description);
      this.taskForm.reset();
      this.router.navigate(['/']);
}
    }
  }
}
