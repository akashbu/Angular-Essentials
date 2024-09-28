import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  public constructor(private taskService: TasksService) {}

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
