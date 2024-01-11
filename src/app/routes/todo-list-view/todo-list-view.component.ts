import { Component, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/shared/services/todo-service';
import { UserStore } from 'src/app/shared/stores/user-store';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from 'src/app/shared/modals/add-task/add-task.component';
import { TaskModel } from 'src/app/shared/model/task-model';

@Component({
  selector: 'app-todo-list-view-page',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent {


    private subscriptions : Subscription[] = [];

    public tasks : any[] = [];

    public show=false;
  
  constructor(
    private userStore : UserStore,
    private todoService : TodoService,
    public activeModal: NgbModal
  ){
    
  }

  public ngOnInit() : void {
    this.getAllList();
  }

  public getAllList(){
    this.subscriptions.push(
        this.todoService.getToDoListByUser('user1').subscribe(res=>{
            console.log("+_+_+_+_+_ ", res);
            this.tasks = res.todoList;
        })
    )
  }

  public statusChange(index : any){
    this.tasks[index].status = this.tasks[index].status ? false : true;
  }

  showModal(){
    const modalRef = this.activeModal.open(AddTaskComponent);
    modalRef.componentInstance.name = 'World';

    modalRef.componentInstance.passedData.subscribe((res: any) => {
        //account.Owner.name
        console.log("_+_+_+_ Outside ", res);
        let newTask = new TaskModel();
        newTask.status = false;
        newTask.taskName = res;
        this.tasks.push(newTask);
        //this.accountData[i].Owner.name = res.ownerName.name;
      })
  }
  

  public submitTasks(){
    this.subscriptions.push(
        this.todoService.submitTasks(this.tasks).subscribe(res=>{
            console.log("+_+_ Res ");
        })
    )
  }


  
}