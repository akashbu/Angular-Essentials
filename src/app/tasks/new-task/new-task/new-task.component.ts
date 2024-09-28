import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface AddData{
  title: string,
  summary: string,
  dueDate: string,

}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<AddData>();
  enteredTitle= "";
  enteredSummary= "";
  enteredDate= "";

  OnCancelTask() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    })
    }
}
