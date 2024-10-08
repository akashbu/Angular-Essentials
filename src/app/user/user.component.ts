import { Component, EventEmitter, input, Input, output, Output} from '@angular/core';

interface User {
  id:string,
  name:string,
  avatar:string,
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user! : User;
  @Input({required:true}) selected! : boolean;
  @Output() select = new EventEmitter<string>();

  // id = input.required<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
