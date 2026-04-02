import { Injectable, signal, computed } from '@angular/core';
//انا بستخدم الخدمة مشان اجيب البيانات لل كومبوننتس

export interface Task
{
  id:number;
  title:string;
  description:string;
  completed:boolean;
  createdAt:Date;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService
{
private taskSginal=signal<Task[]>([
  {
    id:1,
    title:'learn angular',
    description:'learn angular in 30 days',
    completed:true,
    createdAt:new Date()

  },
  {

  id: 2,
  title: 'Build Login API',
  description: 'Create authentication API using ASP.NET Core with JWT',
  completed: false,
  createdAt: new Date()
},
{
  id: 3,
  title: 'Connect Angular to API',
  description: 'Integrate Angular frontend with ASP.NET API using HttpClient',
  completed: false,
  createdAt: new Date()
},
{
  id: 4,
  title: 'Design Task UI',
  description: 'Create responsive task management UI with Angular and CSS',
  completed: true,
  createdAt: new Date()
},
{
  id: 5,
  title: 'Implement Error Handling',
  description: 'Handle API errors globally in Angular using interceptor',
  completed: false,
  createdAt: new Date()
},
{
  id: 6,
  title: 'Setup Database',
  description: 'Design and create SQL Server database with relationships',
  completed: false,
  createdAt: new Date()
},
{
  id: 7,
  title: 'Deploy Project',
  description: 'Deploy full stack app (Angular + ASP.NET) to hosting server',
  completed: false,
  createdAt: new Date()
}

])
 tasks=this.taskSginal.asReadonly();
 taskGet(id:number)
 {
  return this.tasks().find((task)=>task.id===id);
 }
 addTsk(title:string,description:string){
  const tssk:Task={
    id:this.tasks().length+1,
    title,
    description,
    completed:false,
    createdAt:new Date()
  }
  this.taskSginal.update((tasks)=>[...tasks,tssk]);
  }
completedTasks= computed(()=>{
  return this.taskSginal().filter((task)=>task.completed);
});

activeTasks= computed(()=>{
  return this.taskSginal().filter((task)=>!task.completed);
});

 }

