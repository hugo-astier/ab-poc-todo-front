import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskService} from '../task.service';
import {Task} from '../../../models/task.model';
import {mockTasks} from './mock-tasks';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  private taskService = inject(TaskService);
  // tasks = signal<Task[]>([]);
  tasks = signal<Task[]>(mockTasks as Task[]);

  constructor() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAll().subscribe((res) => this.tasks.set(res));
  }
}
