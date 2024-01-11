import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  public taskName : string = '';

  @Output() passedData: EventEmitter<any> = new EventEmitter();
  constructor(
    private activeModal : NgbActiveModal,
  ){}

  public addTask(){
    
    this.passedData.emit(this.taskName);
    this.activeModal.close();
  }
}
